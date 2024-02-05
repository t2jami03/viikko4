import React from "react";
import { View, Text } from "react-native";

export default function Row({ person }) {
  return (
    <View>
      <Text>{person.lastname}, {person.firstname}</Text>
    </View>
  );
}