import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const dataList = [
  { key: "Comanda 1" },
  { key: "Comanda 2" },
  { key: "Comanda 3" },
  { key: "Comanda 4" },
];

export default function Orders({ route }) {
  const { table } = route.params;
  const navigation = useNavigation();

  function navigateToRequests() {
    navigation.navigate("Requests", {
      table,
    });
  }

  function navigateToDetails() {
    navigation.navigate("Details", {
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
        data={dataList}
        renderItem={_renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.newOrder}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={navigateToRequests}
        >
          <Text style={styles.headerText}>Nova comanda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
