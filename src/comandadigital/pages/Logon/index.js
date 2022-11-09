import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import iconImg from "../../assets/icon.png";
import styles from "./styles";

import { logar } from "../../services/requisicoesFirebase";
import { Tables } from "../Tables";

export default function Logon({ navigation }) {
  //const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [statusError, setStatusError] = useState("");
  const [mensagemError, setMensagemError] = useState("");

  //****INÍCIO - forma de cadastrar o usuário no BD sem necessidade de página de cadastro ****//

  useEffect(() => {
    createUserWithEmailAndPassword(auth, "teste1@email.com", "123456")
      .then((dadosDoUsuario) => {
        console.log(dadosDoUsuario);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  //****FIM - forma de cadastrar o usuário no BD sem necessidade de página de cadastro ****//

  //****INÍCIO - função para realizar o login do usuário****//
  async function realizarLogin() {
    if (email == "") {
      Alert.alert("O email é obrigatório!");
    } else if (senha == "") {
      Alert.alert("A senha é obrigatória!");
    } else {
      const resultado = await logar(email, senha);
      if (resultado == "erro") {
        setStatusError("firebase");
        Alert.alert("Email ou senha não conferem!");
      } else {
        navigation.navigate("Tables");
      }
    }
  }
  //****FIM - função para realizar o login do usuário****//

  //function navigateToTables() {
  //navigation.navigate("Tables");
  //}
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.header}></View>
      <Image style={styles.image} source={iconImg} />
      <Text style={styles.description}>
        {" "}
        Área exclusiva do Estabelecimento{" "}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        error={statusError == "email"}
        messageError={mensagemError}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
        error={statusError == "senha"}
        messageError={mensagemError}
      />

      <TouchableOpacity style={styles.button} onPress={() => realizarLogin()}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
