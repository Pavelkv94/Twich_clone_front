import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { SERVER_URL } from "./constants/url.constants";
//import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
require("dotenv").config();

const httpLink = createHttpLink({ //createUploadLink instead of createHttpLink when its will be working, for uploading files
    uri: SERVER_URL,
    credentials: "include",
    headers: {
        "apollo-require-preflight": "true",
    }
});

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});