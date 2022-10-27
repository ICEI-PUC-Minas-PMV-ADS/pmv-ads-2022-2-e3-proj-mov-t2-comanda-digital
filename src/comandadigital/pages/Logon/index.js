import React from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import iconImg from "../../assets/icon.png";
import styles from "./styles";

export default function Logon() {
  const navigation = useNavigation();

  function navigateToTables() {
    navigation.navigate("Tables");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image source={iconImg} />
      <Text style={styles.description}> Área exclusiva do Estabelecimento </Text>
      <TextInput style={styles.input} placeholder="E-Mail" />
      <TextInput style={styles.input} placeholder="Senha" />

      <TouchableOpacity style={styles.button} onPress={navigateToTables}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
