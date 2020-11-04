import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setRandomAnswers, setUserCoins } from "../redux/actions";

import { AppLoading } from "expo";
import { useFonts, Bevan_400Regular } from "@expo-google-fonts/bevan";

import getRandomChoice from "../utils/randomChoice";
import * as Animatable from "react-native-animatable";

import ImageBack from "../higherOrderComponent/ScreenImageBack";
import ArrowBack from "../components/arrowBack";
import WinBlock from "../components/winBlock";
import MakeABet from "../components/makeABet";
import CheckBtn from "../components/checkBtn";
import UserCoinsTab from "../components/userCoinsTab";

const AImage = Animatable.createAnimatableComponent(Image);
const screen = Dimensions.get("screen");

export default ({ navigation }) => {
  const [areYouWin, setAreYouWin] = useState(false);

  const dispatch = useDispatch();

  const userCoins = useSelector((state) => state.userCoins);
  const currentBet = useSelector((state) => state.currentBet);
  const choicesList = useSelector((state) => state.choicesList);
  const randomAnswers = useSelector((state) => state.randomAnswers);
  const userChoice = useSelector((state) => state.userChoice);

  useEffect(() => {
    setAreYouWin(false);
    const trueAnswersLength = randomAnswers.filter((el) => el === userChoice)
      .length;
    if (trueAnswersLength > 0) {
      dispatch(
        setUserCoins(userCoins + currentBet + currentBet * trueAnswersLength)
      );
      setAreYouWin(true);
    }
  }, [randomAnswers]);

  let [fontsLoaded, error] = useFonts({
    Bevan: Bevan_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const checkGame = () => {
    if (userCoins - currentBet > -1) {
      dispatch(
        setRandomAnswers([
          choicesList[getRandomChoice(0, choicesList.length - 1)],
          choicesList[getRandomChoice(0, choicesList.length - 1)],
          choicesList[getRandomChoice(0, choicesList.length - 1)],
        ])
      );
      dispatch(setUserCoins(userCoins - currentBet));
    } else {
      Alert.alert("No money, bro? I can give you some money");
      dispatch(setUserCoins(userCoins + 1000));
    }
  };
  return (
    <ImageBack>
      <ScrollView style={styles.container}>
        <ArrowBack navigation={navigation}  />
        <View style={styles.contentView}>
          <UserCoinsTab userCoins={userCoins} />
          <View style={styles.youWinView}>
            <AImage
              delay={2000}
              duration={2000}
              animation={
                randomAnswers.find((el) => el === userChoice) ? "zoomIn" : ""
              }
              source={require("../images/youWin.png")}
              style={{
                ...styles.youWinImg,
                opacity: areYouWin ? 1 : 0,
              }}
            />
          </View>
          <WinBlock randomAnswers={randomAnswers} userChoice={userChoice} />
          <MakeABet currentBet={currentBet} />
          <CheckBtn startGame={checkGame} />
        </View>
      </ScrollView>
    </ImageBack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    flex: 1,
    resizeMode: "cover",
  },
  contentView: {
    maxWidth: 440,
    marginHorizontal: screen.width > 440 ? (screen.width - 440) / 2 : 0,
  },

  youWinView: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  youWinImg: {
    width: 230,
    height: 60,
  },
});
