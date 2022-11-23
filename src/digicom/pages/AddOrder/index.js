import "intl";
import "intl/locale-data/jsonp/pt-BR";
import React,{ useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
} from "react-native";

import styles from "./styles";

export default function Requests({ route }) {
  const [text, onChangeText] = React.useState("Useless Text");
  const { table } = route.params;
  const { produto } = route.params;
  const [obs, setObs] = useState("");

  const navigation = useNavigation();

  function addPedido(prd,precoPrd,pedidoOBS){
    navigation.navigate("Requests", {table,pedidoOBS,prd,precoPrd});
  }

  return (
   <View style={styles.container} >
      <View style={styles.header}>
        <View style={styles.headerButton}>
           <Text style={styles.headerText}>Menu: {table}</Text>
        </View> 
      </View>
      <Text style={ styles.titleText }>Produto: { produto.nome }</Text>
      <Text style={ styles.priceText }>Preço: { produto.preco }</Text>        
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>              
        <Text style={ styles.titleText }>Observações do pedido:</Text>
        <TextInput
          style={{ height: 40, width: "95%",color: 'white', placeholderTextColor:'white' ,borderColor: 'gray', borderWidth: 1,  marginBottom: 20 }}
          placeholder="Observações"
          value={obs}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setObs(text)}
        />
         <Text style={ styles.priceText }>
          <TouchableOpacity style={styles.newOrder} onPress={() => addPedido(produto.nome,produto.preco,obs)}>
              <Text style={styles.titleText}>Adicionar</Text>
          </TouchableOpacity>  
      </Text>
      </KeyboardAvoidingView>     
    </View> 
  );
}