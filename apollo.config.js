const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(process.cwd(), ".env.local"),
});

module.exports = {
  client: {
    includes: ["api/**/*"],
    service: {
      name: "tsinghua.app",
      url: `${process.env.GRAPHQL_API_URL}/v1/graphql`,
      headers: {
        "x-hasura-admin-secret": process.env.GRAPHQL_ADMIN_SECRET,
      },
    },
  },
};
