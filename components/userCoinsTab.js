import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export default ({ userCoins }) => {
  return (
    <View style={styles.coinsView}>
      <Image
        source={require("../images/backgrounds/coinsBack.png")}
        style={styles.coinsBackImg}
      />
      <Text style={styles.coinsText}>{userCoins}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  coinsView: {
    width: "100%",
    alignItems: "center",
    position: "relative",
    marginBottom: 30,
  },
  coinsBackImg: {
    width: "100%",
    height: 75,
    maxWidth: 440,
    resizeMode: "stretch",
  },
  coinsText: {
    position: "absolute",
    color: "#ffffff",
    fontSize: 30,
    lineHeight: 75,
    textTransform: "uppercase",
    fontFamily: "Bevan",
  },
});
