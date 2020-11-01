import React from "react";
import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";

import { AppLoading } from "expo";
import { useFonts, Bevan_400Regular } from "@expo-google-fonts/bevan";

const screen = Dimensions.get("screen");

export default () => {
  let [fontsLoaded, error] = useFonts({
    Bevan: Bevan_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground
      source={require("./images/background.png")}
      style={styles.backImage}
    >
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.bntPlay}>
            <Image
              source={require("./images/kk.png")}
              style={styles.btnPlayImg}
            />
            <Text style={styles.btnPlayText}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bntPlay}>
            <Image
              source={require("./images/kk.png")}
              style={styles.btnPlayImg}
            />
            {/* <Text style={styles.btnPlayText}></Text> */}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: screen.height,
  },
  backImage: {
    flex: 1,
    resizeMode: "cover",
  },
  bntPlay: {
    borderWidth: 1,
    borderColor: "red",
    width: "70%",
    alignItems: "center",
    maxWidth: 300,
    position: "relative",
  },
  btnPlayImg: {
    width: "100%",
    height: 75,
    resizeMode: "stretch",
  },
  btnPlayText: {
    position: "absolute",
    color: "#ffffff",
    fontSize: 33,
    lineHeight: 75,
    textTransform: "uppercase",
    fontFamily: "Bevan",
  },
});
