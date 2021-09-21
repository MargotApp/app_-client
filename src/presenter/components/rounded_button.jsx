import React from "react";

import {
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function RoudedButton({
  onPress
}) {
  return (
    <TouchableOpacity
     style={styles.button}
     onPress={onPress}
    >
      <AntDesign name="arrowright" size={24} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0E0021",
    padding: 15,
    borderRadius: 50,
  },
});
