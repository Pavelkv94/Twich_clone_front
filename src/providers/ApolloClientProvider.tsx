"use client";

import { ApolloProvider } from "@apollo/client";
import { client } from "@/libs/apollo-client";
import { PropsWithChildren } from "react";

export const ApolloClientProvider = ({ children }: PropsWithChildren<unknown>) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};