import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Form from "./components/Form";
import { StoreProvider } from "./components/Context/StoreContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ShowUsers from "./components/ShowUsers";
import EditUserForm from "./components/EditUserForm";

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
              <EditUserForm />
            </Route>
          </Switch>
        </BrowserRouter>
      </ChakraProvider>
    </StoreProvider>
  );
}

export default App;
