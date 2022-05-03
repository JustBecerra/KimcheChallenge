import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import SearchBar from "./components/SearchBar.jsx";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="content">
      <header className="header">
        Country search
      </header>
      <h4 className="randomtxt">Some random text</h4>
      <SearchBar />
    </div>
  </ApolloProvider>
);
export default App;
