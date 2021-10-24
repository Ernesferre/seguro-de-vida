import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Form from "./components/Form";
import { StoreProvider } from "./components/Context/StoreContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ShowUsers from "./components/ShowUsers";
import EditUser from "./components/EditUser";

function App() {
  return (
    <StoreProvider>
      <ChakraProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Form />
            </Route>

            <Route path="/showusers">
              <ShowUsers />
            </Route>

            <Route path="/edit/:cliente">
              <EditUser />
            </Route>
          </Switch>
        </BrowserRouter>
      </ChakraProvider>
    </StoreProvider>
  );
}

export default App;
