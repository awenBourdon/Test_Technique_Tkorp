'use client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Connects to GraphQL
const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
  cache: new InMemoryCache(),
});

// Allows the app to use GraphQL request
export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}