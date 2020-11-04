import React from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import { AppLoading } from "expo";
import { useFonts, Bevan_400Regular } from "@expo-google-fonts/bevan";
import AnimatedEllipsis from "./animatedDots";
import ImageBack from "../higherOrderComponent/ScreenImageBack";

const screen = Dimensions.get("screen");

export default () => {
  let [fontsLoaded, error] = useFonts({
    Bevan: Bevan_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBack>
      <View style={styles.container}>
        <Image
          style={styles.loadImg}
          source={require("../images/choices/volfChoice.png")}
        />
        <View style={styles.loadBlock}>
          <Text style={styles.loadText}>Loading</Text>
          <AnimatedEllipsis
            style={{
              color: "#ffffff",
              fontSize: 33,
              textTransform: "uppercase",
              fontFamily: "Bevan",
              marginBottom: -4,
            }}
          />
        </View>
      </View>
    </ImageBack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(85, 36, 255,0.45)",
  },
  loadBlock: {
    position: "absolute",
    bottom: 20,
    justifyContent: "center",
    flexDirection: "row",
  },
  loadImg: {
    width: screen.width * 0.7,
    height: screen.width * 0.7,
  },
  loadText: {
    color: "#ffffff",
    fontSize: 33,
    textTransform: "uppercase",
    fontFamily: "Bevan",
  },
});
