import React from "react";
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";
import { useDispatch } from "react-redux";
import {
    decrementCurrentBet,
    incrementCurrentBet,
  } from "../redux/actions";
export default ({ currentBet }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.betView}>
      <ImageBackground
        source={require("../images/backgrounds/betBack.png")}
        style={styles.betBackImg}
      >
        <Text style={styles.betNumber}>{currentBet}</Text>
      </ImageBackground>

      <TouchableOpacity
        style={{ ...styles.betBtn, ...styles.betBtnLess }}
        onPress={() => dispatch(decrementCurrentBet())}
      >
        <Image source={require("../images/betBtnLess.png")} />
      </TouchableOpacity>
      <Text style={styles.betText}>your bet</Text>
      <TouchableOpacity
        style={{ ...styles.betBtn, ...styles.betBtnMore }}
        onPress={() => dispatch(incrementCurrentBet())}
      >
        <Image source={require("../images/betBtnMore.png")} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  betView: {
    width: "100%",
    alignItems: "center",
    position: "relative",
    marginBottom: 30,
    height: 112,
  },
  betBackImg: {
    width: "100%",
    height: 75,
    maxWidth: 440,
  },
  betNumber: {
    color: "#ffffff",
    fontSize: 30,
    lineHeight: 75,
    textTransform: "uppercase",
    fontFamily: "Bevan",
    alignSelf: "center",
  },
  betBtn: {
    width: 56,
    height: 56,
    position: "absolute",
    bottom: 0,
  },
  betBtnLess: {
    left: 70,
  },
  betBtnMore: {
    right: 70,
  },
  betText: {
    color: "#ffffff",
    fontSize: 17,
    textTransform: "uppercase",
    fontFamily: "Bevan",
    alignSelf: "center",
  },
});
