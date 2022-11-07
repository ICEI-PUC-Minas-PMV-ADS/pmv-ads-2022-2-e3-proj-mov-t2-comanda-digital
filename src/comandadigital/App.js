import React, { useState } from "react";
import UserProvider from "./pages/Contexts/userContext";
import Routes from "./routes";

const App = () => {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
};
export default App;
