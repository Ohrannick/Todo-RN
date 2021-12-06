import React from "react";
import styled from "styled-components/native";
// import { View, Text, StyleSheet } from "react-native";

const HeaderView = styled.View`
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 24px;
  color: #3949ab;
`;

export const Header = ({ todo }) => {
  return (
    <HeaderView>
      <HeaderText>Список задач: {todo.length}</HeaderText>
    </HeaderView>
  );
};

// const s = StyleSheet.create({
//   header: {
//     alignItems: "flex-start",
//   },
//   text: {
//     fontSize: 24,
//   },
// });
