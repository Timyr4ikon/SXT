import React from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from "react-native";
export default ({ startGame }) => {

  return (
    <TouchableOpacity
      style={{ ...styles.btnCheck, marginBottom: 15 }}
      onPress={() => startGame()}
    >
      <Image
        source={require("../images/backgrounds/playBtnBack.png")}
        style={styles.btnCheckImg}
      />
      <Text style={styles.btnCheckText}>Check</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnCheck: {
    width: "70%",
    alignItems: "center",
    maxWidth: 300,
    position: "relative",
    alignSelf: "center",
  },
  btnCheckImg: {
    width: "100%",
    height: 75,
    resizeMode: "stretch",
  },
  btnCheckText: {
    position: "absolute",
    color: "#ffffff",
    fontSize: 33,
    lineHeight: 75,
    textTransform: "uppercase",
    fontFamily: "Bevan",
  },
});
