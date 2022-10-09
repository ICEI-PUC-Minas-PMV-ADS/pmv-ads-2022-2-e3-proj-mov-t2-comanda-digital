
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginEstabelecimento from "./loginestab";
import MainView from "./mainview";
import Homescreen from "./homescreen";
import Aboutscreen from "./aboutscreen";


const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>                        
        <AppStack.Screen name="MainView" component={MainView} />
        <AppStack.Screen name="LoginEstab" component={LoginEstabelecimento} />
        <AppStack.Screen name="Homescreen" component={Homescreen} />
        <AppStack.Screen name="Aboutscreen" component={Aboutscreen} />        
      </AppStack.Navigator>
    </NavigationContainer>
  );
}