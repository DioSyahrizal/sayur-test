import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://swapi-graphql.netlify.app/",
  cache: new InMemoryCache(),
  credentials: "omit",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default client;
