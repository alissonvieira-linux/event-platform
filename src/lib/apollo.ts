import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oufbaz13ee01z48wzwbn4q/master',
  cache: new InMemoryCache()
});