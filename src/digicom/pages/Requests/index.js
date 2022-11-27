import React, { useRef } from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function Requests({ route }) {
  const { table } = route.params;
  const { pedidoOBS } = route.params;
  const { prd } = route.params;
  const { precoPrd } = route.params;

  const navigation = useNavigation();
  
  function addPedido(prd,precoPrd,pedidoOBS){
    navigation.navigate("Orders2", {table,pedidoOBS,prd,precoPrd});
  }

  return (
    <View style={styles.container} > 

      <View style={styles.header}>
        <View style={styles.headerButton}>
           <Text style={styles.headerText}>Menu: {table}</Text>
        </View> 
      </View>
      <Text style={ styles.titleText }>Produto: {prd}</Text>
      <Text style={ styles.priceText }>Preço: {precoPrd}</Text>
      <Text style={ styles.titleText }>Observações: { pedidoOBS }</Text>
      <KeyboardAvoidingView style={styles.container}>
          <TouchableOpacity style={styles.newOrder} onPress={() => addPedido(prd,precoPrd,pedidoOBS)}>
            <Text style={styles.headerText}>Lançar Pedido</Text>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
