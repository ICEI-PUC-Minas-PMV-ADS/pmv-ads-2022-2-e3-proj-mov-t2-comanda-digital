import React from "react";
import { useUser } from "../pages/Contexts/userContext";
import Tables from "../pages/Tables";
import Logon from "../pages/Logon";

const Route = () => {
  const { signed } = useUser();
  return <>{signed ? <Tables /> : <Logon />}</>;
};

export default Route;
