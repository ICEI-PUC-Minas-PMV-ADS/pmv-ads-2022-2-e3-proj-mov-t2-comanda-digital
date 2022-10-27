import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Logon from "./pages/Logon";
import Tables from "./pages/Tables";
import Orders from "./pages/Orders";
import Requests from "./pages/Requests";
import Details from "./pages/Details";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTintColor: "#333",
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "",
          }}
        />
        <Stack.Screen
          name="Logon"
          component={Logon}
          options={{
            title: "",
          }}
        />
        <Stack.Screen
          name="Tables"
          component={Tables}
          options={{
            title: "Mesas",
          }}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{
            title: "Comandas",
          }}
        />
        <Stack.Screen
          name="Requests"
          component={Requests}
          options={{
            title: "Pedido",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: "Detalhes do pedido",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
