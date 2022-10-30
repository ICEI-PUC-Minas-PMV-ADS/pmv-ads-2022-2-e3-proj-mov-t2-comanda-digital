import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import styles from "./styles";
import { Form, FormInput } from "./styledComponent";

export default function Requests({ route }) {
  const { table } = route.params;

  const dataList = [
    {
      pedido: {
        ficha: "13",
        produto: "Salada Cesar",
        numCozinha: "1",
        observacao: "Sem cebola. Adicionar azeite",
        valor: "39.9",
      },
    },
  ];

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerButton}>
          <Text style={styles.headerText}>Pedidos: {table}</Text>
        </View>
      </View>
      <Form>
        <FormInput
          label="Ficha"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Ficha"
          returnKeyType="next"
          value={dataList[0].pedido.ficha}
          disabled
        />
        <FormInput
          label="Nº Cozinha"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nº Cozinha"
          returnKeyType="next"
          value={dataList[0].pedido.numCozinha}
        />
        <FormInput
          label="Produto"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Produto"
          returnKeyType="next"
          value={dataList[0].pedido.produto}
        />
        <FormInput
          label="Observação"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Observação"
          returnKeyType="next"
          value={dataList[0].pedido.observacao}
        />
        <FormInput
          label="Valor"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Valor"
          returnKeyType="next"
          value={Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(dataList[0].pedido.valor)}
        />
      </Form>
    </KeyboardAvoidingView>
  );
}
