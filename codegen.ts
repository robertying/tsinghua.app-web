import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [`${process.env.GRAPHQL_API_URL}/v1/graphql`]: {
        headers: {
          "x-hasura-admin-secret": process.env.GRAPHQL_ADMIN_SECRET,
        } as Record<string, string>,
      },
    },
  ],
  documents: "api/*.ts",
  generates: {
    "api/types/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
  config: {
    scalars: {
      timestamptz: "string",
      uuid: "string",
    },
    namingConvention: {
      typeNames: "change-case-all#pascalCase",
    },
  },
};

export default config;
