import React, { FC } from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import client from "./common/apollo-client";

const Main: FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default Main;
