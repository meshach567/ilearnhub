// File: lib/apollo-client.ts
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// Replace this URL with your actual GraphQL API endpoint
const API_URL =
  process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT ||
  "https://api-eu-central-1.hygraph.com/v2/your-project-id/master";

const httpLink = new HttpLink({
  uri: API_URL,
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_TOKEN || ""}`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});

export default client;
