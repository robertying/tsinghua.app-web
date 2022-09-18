import { useMemo } from "react";
import { AppProps } from "next/app";
import {
  ApolloClient,
  createHttpLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";
import { GraphQLClient } from "graphql-request";
import { getAccessToken } from "./session";

export const graphQLClient = new GraphQLClient(
  `${process.env.GRAPHQL_API_URL}/v1/graphql`,
  {
    headers: {
      "x-hasura-admin-secret": process.env.GRAPHQL_ADMIN_SECRET!,
    },
  }
);

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/v1/graphql`,
});
const authLink = setContext(async (_, { headers }) => {
  const token = await getAccessToken();
  return {
    headers: {
      ...headers,
      ...(token
        ? {
            Authorization: "Bearer " + token,
          }
        : undefined),
    },
  };
});
const clientLink = authLink.concat(httpLink);

const serverLink = new HttpLink({
  uri: `${process.env.GRAPHQL_API_URL}/v1/graphql`,
  headers: {
    "x-hasura-admin-secret": process.env.GRAPHQL_ADMIN_SECRET!,
  },
});

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: typeof window === "undefined" ? serverLink : clientLink,
    cache: new InMemoryCache({
      typePolicies: {
        realm_user: {
          keyFields: ["realm_id", "user_id"],
        },
        realm_user_union: {
          keyFields: ["realm_id", "user_id"],
        },
        thread_reaction: {
          keyFields: ["thread_id", "user_id", "name"],
        },
        post_reaction: {
          keyFields: ["post_id", "user_id", "name"],
        },
      },
    }),
  });
}

export function initializeApollo(
  initialState: NormalizedCacheObject | null = null
) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();

    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    _apolloClient.cache.restore(data);
  }

  if (typeof window === "undefined") return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps?: any
) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps: any) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}
