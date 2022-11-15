import React, { useState } from "react";
import UserProvider from "./pages/Contexts/userContext";
import Routes from "./routes";
import { Provider } from 'react-redux'
import store from './store/'

const App = () => {
  return (
    <UserProvider>
        <Provider store={store}>
          <Routes />
        </Provider>
    </UserProvider>
  );
};
export default App;
