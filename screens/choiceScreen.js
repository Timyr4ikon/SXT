import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { setUserChoice, setRandomAnswers } from "../redux/actions";
import { AppLoading } from "expo";
import { useFonts, Bevan_400Regular } from "@expo-google-fonts/bevan";
import Loading from "../components/loadingScreen";
import ImageBack from "../higherOrderComponent/ScreenImageBack";

export default ({ navigation }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const choicesData = useSelector((state) => state.choicesList);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  let [fontsLoaded, error] = useFonts({
    Bevan: Bevan_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      {isLoaded ? (
        <ImageBack>
          <View style={styles.container}>
            <Text style={styles.title}>Make a choice</Text>
            <FlatList
              style={styles.list}
              data={choicesData}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.choiceTouch}
                  onPress={() => {
                    dispatch(setUserChoice(item));
                    dispatch(setRandomAnswers([]));
                    return navigation.navigate("Play");
                  }}
                >
                  <Image source={item.img} style={styles.choiceImg} />
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ImageBack>
      ) : (
        <Loading />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "#ffffff",
    paddingTop: 30,
    fontSize: 33,
    textTransform: "uppercase",
    fontFamily: "Bevan",
  },
  list: {
    width: "100%",
  },
  choiceTouch: {
    width: 200,
    height: 200,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  choiceImg: {
    width: 160,
    height: 180,
    resizeMode: "center",
  },
});
