import React, { useRef } from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";
import { Form, FormInput } from "./stylesComponents";

export default function Requests({ route }) {
  const { table } = route.params;

  const fichaRef = useRef();
  const cozinhaRef = useRef();
  const produtoRef = useRef();
  const obsRef = useRef();

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
          onSubmitEditing={() => cozinhaRef.current.focus()}
        />
        <FormInput
          label="Nº Cozinha"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nº Cozinha"
          returnKeyType="next"
          ref={cozinhaRef}
          onSubmitEditing={() => produtoRef.current.focus()}
        />
        <FormInput
          label="Produto"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Produto"
          returnKeyType="next"
          ref={produtoRef}
          onSubmitEditing={() => obsRef.current.focus()}
        />
        <FormInput
          label="Observação"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Observação"
          returnKeyType="next"
          ref={obsRef}
          onSubmitEditing={() => {}}
        />

        <TouchableOpacity style={styles.newOrder} onPress={() => {}}>
          <Text style={styles.headerText}>Lançar Pedido</Text>
        </TouchableOpacity>
      </Form>
    </KeyboardAvoidingView>
  );
}
