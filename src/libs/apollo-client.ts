import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
require("dotenv").config();

const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_SERVER_URL,
    credentials: "include",
});

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});