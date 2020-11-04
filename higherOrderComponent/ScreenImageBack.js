import React from "react";
import { StyleSheet, ImageBackground } from "react-native";

export default ({ children }) => {
  return (
    <ImageBackground
      source={require("../images/backgrounds/background.png")}
      style={styles.backImage}
    >{children}</ImageBackground>
  );
};

const styles = StyleSheet.create({
  backImage: {
    flex: 1,
    resizeMode: "cover",
  },
});
