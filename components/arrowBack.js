import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";

export default ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.arrowBackTouch}
      onPress={() => navigation.navigate("Choice")}
    >
      <Image
        style={styles.arrowBackImg}
        source={require("../images/arrowBack.png")}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  arrowBackTouch: {
    width: 90,
    marginTop: 30,
    marginBottom: 35,
  },
  arrowBackImg: {
    width: "100%",
    height: 45,
  },
});
