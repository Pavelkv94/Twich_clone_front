import { ApolloClient, createHttpLink, InMemoryCache, split } from "@apollo/client";
import { SERVER_URL, WS_URL } from "./constants/url.constants";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { Kind } from "graphql";
//import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
require("dotenv").config();

const httpLink = createHttpLink({ //createUploadLink instead of createHttpLink when its will be working, for uploading files
    uri: SERVER_URL,
    credentials: "include",
    headers: {
        "apollo-require-preflight": "true",
    }
});

// for subscriptions on websocket
const wsLink = new WebSocketLink({
    uri: WS_URL,
    options: {
        reconnect: true,
    },
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpLink
);

export const client = new ApolloClient({
    //link: httpLink, - without ws
    link: splitLink,
    cache: new InMemoryCache(),
});