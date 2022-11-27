import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

 const dataList2 = [
  { key: "Pedido 1" },  
  { key: "Pedido 2" },  
];

export default function Orders({ route }) {
  const { table } = route.params;
  const { prd } = route.params;
  const { precoPrd } = route.params;
  const { pedidoOBS } = route.params;

  const navigation = useNavigation();

  
  function navegaToCardapio(){
    navigation.navigate("Cardapio", {
      table,
    });
  }

  function navigateToDetails() {
    navigation.navigate("Details", {
      table,
    });
  }

  function FinalizeOrder() {
    navigation.navigate("Sucesso", {
      table,
    });
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.order}>
        <TouchableOpacity onPress={navigateToDetails}>
          <Text style={styles.orderText}>{item.key}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerButton}>
          <Text style={styles.headerText}>Menu: {table}</Text>
        </View>
      </View>      

      <FlatList
        data={dataList2}
        renderItem={_renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.newOrder}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={navegaToCardapio}
        >
          <Text style={styles.headerText}>Adicionar Pedido</Text>
        </TouchableOpacity>        
      </View>
      
      <View style={styles.newOrder2}>
      <TouchableOpacity
          style={styles.headerButton}
          onPress={FinalizeOrder}
        >
          <Text style={styles.headerText}>Finaliza Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
