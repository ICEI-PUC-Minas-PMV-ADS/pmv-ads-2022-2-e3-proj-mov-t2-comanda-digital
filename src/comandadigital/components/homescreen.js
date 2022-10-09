
import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";


import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function Tudo() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela Lista Categorias</Text>
    </View>
  );
}

function Bebidas() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela Lista Bebidas</Text>
    </View>
  );
}

function Comidas() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela Lista Comidas</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Sobre" onPress={() => alert('Sobre')} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Tudo" component={Tudo} />
      <Drawer.Screen name="Bebidas" component={Bebidas} />
      <Drawer.Screen name="Comidas" component={Comidas} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer  independent={true}>
      <MyDrawer />
    </NavigationContainer>
  );
}