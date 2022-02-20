import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: true,
  uri: "https://swapi-graphql.netlify.app/",
  cache: new InMemoryCache(),
  credentials: "omit",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default client;
