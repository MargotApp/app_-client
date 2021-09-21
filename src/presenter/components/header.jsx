import React from "react";
import { useNavigation } from '@react-navigation/native'

import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";

import {
  TEXT_STYLES,
} from "../../application/constants";

export default function Header({title}) {

  const navigator = useNavigation()

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigator.goBack()}>
          <Image
            style={styles.icon}
            source={require("../../../assets/icons/arrow-back.png")}
          />
        </TouchableOpacity>

        <Text style={styles.text}>{title}</Text>

        <TouchableOpacity disabled style={{opacity: 0}}>
          <Image
            style={styles.icon}
            source={require("../../../assets/icons/arrow-back.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 26,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: Dimensions.get("screen").height / 30,
    height: Dimensions.get("screen").height / 30,
  },
  text: {
    ...TEXT_STYLES,
    fontWeight: "600",
  },
});
