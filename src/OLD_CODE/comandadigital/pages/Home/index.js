import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  KeyboardAvoidingView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard,
} from "react-native";
import Logo from "../../assets/Logo-vermelho.png";
import styles from "./styles";

export default function App() {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 170, y: 195 }));

  const StackNav = useNavigation();

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      keyboardDidShow
    );

    keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      keyboardDidHide
    );

    // Animações em paralelo
    Animated.parallel([
      // Fornece um modelo de física básico (efeito mola/estilingue)
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }),

      // Anima um valor ao longo do tempo
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  });

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 95,
        duration: 100,
        useNativeDriver: true,
      }),

      Animated.timing(logo.y, {
        toValue: 105,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 170,
        duration: 100,
        useNativeDriver: true,
      }),

      Animated.timing(logo.y, {
        toValue: 195,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.containerLogo}>
          <Animated.Image
            style={{
              width: logo.x,
              height: logo.y,
              borderRadius: 15,
              useNativeDriver: true,
            }}
            source={require("../../assets/icon.png")}
          />
        </View>

        <Animated.View
          style={[
            styles.form,
            {
              opacity: opacity,
              transform: [
                {
                  translateY: offset.y,
                },
              ],
              useNativeDriver: true,
            },
          ]}
        >
          <TouchableOpacity
            style={styles.buttonSubmit}
            onPress={() => StackNav.navigate("Tables")}
          >
            <Text style={styles.submitText}>Iniciar Mesa</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => StackNav.navigate("Logon")}
          >
            <Text style={styles.registerText}>Acesso Estabelecimento</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    </>
  );
}
