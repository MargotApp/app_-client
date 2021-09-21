import React, { useRef, useCallback, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Vibration,
  Platform
} from "react-native";

import { colors } from "../../application/colors";
import {
  MAX_WIDTH,
  MAX_HEIGHT,
  HORIZONTAL_PADDING,
  VERTICAL_PADDING,
  TEXT_STYLES,
} from "../../application/constants";

import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { Context } from '../../application/Context/authContext'

const AnimatedImage = Animated.createAnimatedComponent(Image);

const suggestions = [
  {
    id: 1,
    image:
      "https://static.zara.net/photos///2021/S/0/2/p/8211/307/250/2/w/1500/8211307250_1_1_1.jpg?ts=1628520524223",
  },
  {
    id: 2,
    image:
      "https://static.zara.net/photos///2021/S/0/2/p/8211/307/250/2/w/1500/8211307250_1_1_1.jpg?ts=1628520524223",
  },
  {
    id: 4,
    image:
      "https://static.zara.net/photos///2021/S/0/2/p/8211/307/250/2/w/1500/8211307250_1_1_1.jpg?ts=1628520524223",
  },
];

export default function Home() {
  const { data } = useContext(Context)
  const { givenName, photoUrl } = data.user

  const scale = useSharedValue(0);

  const doubleTapRef = useRef();

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ scale: Math.max(scale.value, 0) }],
  }));

  const onDoubleTap = useCallback(() => {
    Vibration.vibrate([5, 0, 5, 0])
    scale.value = withSpring(0.5, undefined, (isFinished) => {
      if (isFinished) {
        scale.value = withDelay(450, withSpring(0));
      }
    });
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.header}>
          <Image
            style={styles.profileImage}
            source={{
              uri: photoUrl,
            }}
          />
          <View>
            <Text style={styles.title}>Olá,</Text>
            <Text style={styles.subtitle}>{givenName}</Text>
          </View>
        </View>

        <View style={styles.main}>
          <Text
            style={{
              ...styles.subtitle,
              width: MAX_WIDTH / 1.5,
              textAlign: "center",
            }}
          >
            Aqui está a nossa sugestão para o look de hoje
          </Text>

          <ScrollView
            pagingEnabled
            horizontal
            contentContainerStyle={{ paddingHorizontal: MAX_WIDTH / 7 }}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            snapToInterval={MAX_WIDTH / 1.39}
            snapToAlignment="start"
          >
            <TapGestureHandler
              numberOfTaps={2}
              ref={doubleTapRef}
              onActivated={onDoubleTap}
            >
              <Animated.View>
                <ImageBackground
                  style={styles.highlightImage}
                  source={{
                    uri: 'https://static.zara.net/photos///2021/S/0/2/p/8211/307/250/2/w/1500/8211307250_1_1_1.jpg?ts=1628520524223',
                  }}
                >
                  <AnimatedImage
                    source={require("../../../assets/images/white_star.png")}
                    style={rStyle}
                  />
                </ImageBackground>
              </Animated.View>
            </TapGestureHandler>
          </ScrollView>

          <TouchableOpacity style={styles.refreshButton}>
            <Text style={styles.buttonTextColor}>Refresh</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
  },
  header: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingVertical: VERTICAL_PADDING,
  },
  profileImage: {
    width: Dimensions.get("screen").height / 14,
    height: Dimensions.get("screen").height / 14,
    borderRadius: 100,
    marginRight: 20,
  },
  title: {
    color: TEXT_STYLES.color,
    fontSize: TEXT_STYLES.fontSize,
    fontWeight: "600",
  },
  subtitle: {
    color: TEXT_STYLES.color,
    fontSize: TEXT_STYLES.fontSize,
    fontWeight: "300",
  },
  main: {
    flex: 1,
    width: MAX_WIDTH,
    paddingVertical: VERTICAL_PADDING,
    alignItems: "center",
  },
  highlightImage: {
    width: MAX_WIDTH / 1.5,
    height: MAX_HEIGHT,
    borderRadius: 5,
    marginVertical: MAX_HEIGHT / 20,
    marginHorizontal: MAX_WIDTH / 40,
    justifyContent: "center",
    alignItems: "center",
  },
  refreshButton: {
    backgroundColor: "#dbdbdb34",
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingVertical: VERTICAL_PADDING / 2,
    borderRadius: 100,
    marginBottom: MAX_HEIGHT / 25,
  },
  buttonTextColor: {
    color: TEXT_STYLES.color,
    fontWeight: "500",
  },
});
