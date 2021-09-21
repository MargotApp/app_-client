import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  ImageBackground,
  Dimensions,
} from "react-native";

import {
  HORIZONTAL_PADDING,
  VERTICAL_PADDING,
} from "../../application/constants";
import { colors } from "../../application/colors";

import Animated, {
  Value,
  interpolateNode,
  Extrapolate,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

import Header from "../components/header";

const data = [
  {
    name: "Blazer",
    color: "Azul-marinho",
    low_image:
      "https://static.zara.net/photos///2021/S/0/2/p/1564/460/401/2/w/563/1564460401_1_1_1.jpg?ts=1627634179678",
    high_image:
      "https://static.zara.net/photos///2021/S/0/2/p/1564/460/401/2/w/2048/1564460401_1_1_1.jpg?ts=1627634179678",
  },
  {
    name: "Blazer",
    color: "Azul-marinho",
    low_image:
      "https://static.zara.net/photos///2021/S/0/2/p/1564/460/401/2/w/563/1564460401_1_1_1.jpg?ts=1627634179678",
    high_image:
      "https://static.zara.net/photos///2021/S/0/2/p/1564/460/401/2/w/2048/1564460401_1_1_1.jpg?ts=1627634179678",
  },
  {
    name: "Blazer",
    color: "Azul-marinho",
    low_image:
      "https://static.zara.net/photos///2021/S/0/2/p/1564/460/401/2/w/563/1564460401_1_1_1.jpg?ts=1627634179678",
    high_image:
      "https://static.zara.net/photos///2021/S/0/2/p/1564/460/401/2/w/2048/1564460401_1_1_1.jpg?ts=1627634179678",
  },
  {
    name: "Blazer",
    color: "Azul-marinho",
    low_image:
      "https://static.zara.net/photos///2021/S/0/2/p/1564/460/401/2/w/563/1564460401_1_1_1.jpg?ts=1627634179678",
    high_image:
      "https://static.zara.net/photos///2021/S/0/2/p/1564/460/401/2/w/2048/1564460401_1_1_1.jpg?ts=1627634179678",
  },
  {
    name: "Blazer",
    color: "Azul-marinho",
    low_image:
      "https://static.zara.net/photos///2021/S/0/2/p/1564/460/401/2/w/563/1564460401_1_1_1.jpg?ts=1627634179678",
    high_image:
      "https://static.zara.net/photos///2021/S/0/2/p/1564/460/401/2/w/2048/1564460401_1_1_1.jpg?ts=1627634179678",
  },
  {
    name: "Blazer",
    color: "Azul-marinho",
    low_image:
      "https://static.zara.net/photos///2021/S/0/2/p/1564/460/401/2/w/563/1564460401_1_1_1.jpg?ts=1627634179678",
    high_image:
      "https://static.zara.net/photos///2021/S/0/2/p/1564/460/401/2/w/2048/1564460401_1_1_1.jpg?ts=1627634179678",
  },
];

export default function Favorites() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Header title="Favoritos" />

      <FlatList
        style={styles.content}
        data={data}
        renderItem={({ item, index }) => <Card item={item} index={index} />}
        keyExtractor={(item, index) => index.toString()} 
        numColumns="2"
      >
        <Card />
      </FlatList>
    </SafeAreaView>
  );
}

function Card({ item }) {
  const originalImageOpacity = useSharedValue(0);

  function handleAnimate() {
    originalImageOpacity.value = withTiming(1, {
      duration: 300,
      easing: Easing.bezier(0.61, 1, 0.88, 1),
    });
  }

  const originalImageStyle = useAnimatedStyle(() => {
    return {
      opacity: originalImageOpacity.value,
    };
  });

  return (
    <View style={styles.card}>
      <View
        style={styles.cardHeader}
      >
        <ImageBackground
          style={styles.image}
          imageStyle={{ borderRadius: 6 }}
          blurRadius={3}
          source={{
            uri: item.low_image,
          }}
        >
          <Animated.Image
            style={[originalImageStyle, styles.image]}
            onLoadEnd={handleAnimate}
            source={{
              uri: item.high_image,
            }}
          />
        </ImageBackground>
      </View>
      <View style={styles.cardDescription}>
        <Text>{item.name}</Text>
        <Text>Cor {item.color}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    width: "100%",
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingVertical: VERTICAL_PADDING,
  },
  card: {
    width: "48.5%",
    height: Dimensions.get("screen").height / 3,
    borderRadius: 10,
    backgroundColor: colors.light_gray,
    marginBottom: 20,
    marginRight: 10
  },
  cardHeader: {
    height: '75%'
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  cardDescription: {
    paddingVertical: 15,
    paddingHorizontal: 10
  },
});
