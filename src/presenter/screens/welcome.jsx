import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";

import {
  SafeAreaView,
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { HORIZONTAL_PADDING, VERTICAL_PADDING } from "../../application/constants";

// Components
import Button from "../components/button";

import { Context } from "../../application/Context/authContext";
import { GetUserController } from "../../domain/controllers/userController";

const getUserController = new GetUserController()

export default function Welcome() {
  const { handleLogin, setAuthenticated, setData } = useContext(Context)

  const handleGoogleSignIn = () => {
    // handleLogin().then(data => {
    //   if (data.success) {
    //     setData(data.result)
    //     setAuthenticated(true)
    //   }
    // }
    getUserController.handle()
  }

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../../assets/images/welcome_image.png")}
      >
        <LinearGradient
          style={styles.gradient}
          colors={["#21082710", "#210827"]}
        />
      </ImageBackground>

      <SafeAreaView style={styles.content}>
        <Text style={styles.title}>Margot</Text>
        <Text style={styles.description}>
          Finding the look that you wear well
        </Text>

        <View style={styles.footer}>
          <Button ButtonText="ENTRAR COM GOOGLE" onPress={handleGoogleSignIn}>
            <Image
              source={require("../../../assets/icons/flat-color-google.png")}
            />
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "relative",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  gradient: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
  },
  title: {
    paddingHorizontal: HORIZONTAL_PADDING,
    fontSize: 45,
    fontWeight: "600",
    color: "#fff",
  },
  description: {
    width: "80%",
    fontSize: 30,
    fontWeight: "200",
    color: "#fff",
    paddingHorizontal: HORIZONTAL_PADDING,
    marginVertical: VERTICAL_PADDING,
  },
  footer: {
    height: 100,
    marginTop: 30,
    marginBottom: 15,
    paddingHorizontal: HORIZONTAL_PADDING,
  },
});
