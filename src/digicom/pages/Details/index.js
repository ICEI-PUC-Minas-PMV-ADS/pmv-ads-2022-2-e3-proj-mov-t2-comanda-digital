import "intl";
import "intl/locale-data/jsonp/pt-BR";
import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import styles from "./styles";


export default function Requests({ route }) {
  const { table } = route.params;
  
  const navigation = useNavigation();

  function voltarTelaAnterior(prd,precoPrd,pedidoOBS){
    navigation.navigate("Orders2", {table});
  }

  const dataList = [
    {
      pedido: {
        ficha: "13",
        produto: "X-Salada",
        numCozinha: "1",
        observacao: "Bem passado",
        valor: "15.50",
      },
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerButton}>
          <Text style={styles.headerText}>Pedidos: {table}</Text>
        </View>
      </View>      

      <Text style={ styles.titleText }>Produto: {dataList[0].pedido.produto }</Text>
      <Text style={ styles.priceText }>Preço: { dataList[0].pedido.valor }</Text>
      <Text style={ styles.titleText }>OBS: {dataList[0].pedido.observacao }</Text>

      <View style={styles.container}>
      <TouchableOpacity
          style={styles.newOrder}
          onPress={voltarTelaAnterior}
        >
          <Text style={styles.headerText}>Voltar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
