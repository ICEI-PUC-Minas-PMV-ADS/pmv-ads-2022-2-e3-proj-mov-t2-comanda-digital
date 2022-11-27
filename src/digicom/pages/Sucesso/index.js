import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

 const dataList2 = [
  
  { key: "Pedido realizado com sucesso!" },    
];

export default function Orders({ route }) {
  const { table } = route.params;
  const { prd } = route.params;
  const { precoPrd } = route.params;
  const { pedidoOBS } = route.params;

  const navigation = useNavigation();

  function FinalizeOrder() {
    navigation.navigate("Tables", {
      table,
    });
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.order}>
        <TouchableOpacity >
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
          onPress={FinalizeOrder}
        >
          <Text style={styles.headerText}>Voltar para Mesas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
