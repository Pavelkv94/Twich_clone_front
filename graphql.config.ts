import { CodegenConfig } from "@graphql-codegen/cli";
require("dotenv").config();

const config: CodegenConfig = {
    schema: process.env.NEXT_PUBLIC_SERVER_URL,
    documents: ["src/graphql/**/*.graphql"],
    generates: {
        "src/graphql/generated/graphql.ts": {
            plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
        },
    },
    ignoreNoDocuments: true,
};

export default config;