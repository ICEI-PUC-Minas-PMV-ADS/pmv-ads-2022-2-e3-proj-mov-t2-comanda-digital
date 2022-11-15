import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: "rgba(255, 255, 255, 0.7)",
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #fff;
`;
