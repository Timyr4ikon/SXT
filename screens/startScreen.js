import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { AppLoading } from "expo";
import { useFonts, Bevan_400Regular } from "@expo-google-fonts/bevan";
import ImageBack from "../higherOrderComponent/ScreenImageBack";

export default ({ navigation }) => {
  let [fontsLoaded, error] = useFonts({
    Bevan: Bevan_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBack>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ ...styles.bntPlay, marginBottom: 15 }}
          onPress={() => navigation.navigate("Choice")}
        >
          <Image
            source={require("../images/backgrounds/playBtnBack.png")}
            style={styles.btnPlayImg}
          />
          <Text style={styles.btnPlayText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bntPlay}
        >
          <Image
            source={require("../images/backgrounds/scoreBtnBack.png")}
            style={styles.btnPlayImg}
          />
          <Text style={styles.btnPlayText}>Score</Text>
        </TouchableOpacity>
      </View>
    </ImageBack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bntPlay: {
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
