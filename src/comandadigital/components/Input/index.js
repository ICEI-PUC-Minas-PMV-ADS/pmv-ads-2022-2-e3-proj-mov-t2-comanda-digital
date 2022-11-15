import React, { forwardRef } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, TInput, Label } from "./styled";

function Input({ style, icon, label, ...rest }, ref) {
  return (
    <Container style={style}>
      <Label>{label}:</Label>
      {icon && <Icon name={icon} size={20} color="#dab22f" />}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

export default forwardRef(Input);
