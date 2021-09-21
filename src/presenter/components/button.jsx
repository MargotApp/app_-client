import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({ ButtonText, onPress, children }) {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {children}<Text style={styles.buttonText}>{ButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,

    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonText: {
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: "10%",
  },
});
