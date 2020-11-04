import React from "react";
import { ImageBackground, Image, View, StyleSheet } from "react-native";
import shortid from "shortid";
import * as Animatable from "react-native-animatable";
const AImage = Animatable.createAnimatableComponent(Image);

export default ({ randomAnswers, userChoice }) => {
  return (
    <View style={styles.tapeView}>
      {randomAnswers.length === 0 ? (
        <>
          <ImageBackground
            source={require("../images/tapeVar.png")}
            style={styles.tapeBlock}
          ></ImageBackground>
          <ImageBackground
            source={require("../images/tapeVar.png")}
            style={styles.tapeBlock}
          ></ImageBackground>
          <ImageBackground
            source={require("../images/tapeVar.png")}
            style={styles.tapeBlock}
          ></ImageBackground>
        </>
      ) : (
        randomAnswers.map((el) => {
          return (
            <ImageBackground
              source={
                el === userChoice
                  ? require("../images/x.png")
                  : require("../images/tapeVar.png")
              }
              style={
                el === userChoice
                  ? {
                      ...styles.tapeBlock,
                      shadowColor: "yellow",
                      shadowOffset: {
                        width: 0,
                        height: 0,
                      },
                      shadowOpacity: 1,
                      shadowRadius: 10.0,
                      width: 110,
                      height: 105,
                    }
                  : styles.tapeBlock
              }
              key={shortid.generate()}
            >
              <AImage
                duration={2000}
                animation="fadeIn"
                style={styles.tapeBlockImg}
                source={el.img}
              />
            </ImageBackground>
          );
        })
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  tapeView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 90,
    height: 105,
    alignItems: "center",
  },
  tapeBlock: {
    width: 100,
    height: 95,
    justifyContent: "center",
    alignItems: "center",
  },
  tapeBlockImg: {
    width: 85,
    height: 75,
    resizeMode: "contain",
  },
});
