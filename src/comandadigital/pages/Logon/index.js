import React, { useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import iconImg from "../../assets/icon.png";
import styles from "./styles";

export default function Logon() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("email@teste.com");
  const [password, setPassword] = useState("senha");

  function navigateToTables() {
    navigation.navigate("Tables");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.image} source={iconImg} />
      <Text style={styles.description}>
        {" "}
        Área exclusiva do Estabelecimento{" "}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="E-Mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={navigateToTables}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
