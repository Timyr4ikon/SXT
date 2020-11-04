import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import startScreen from "./screens/startScreen";
import playScreen from "./screens/playScreen";
import choiceScreen from "./screens/choiceScreen";

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen
            options={{
              headerShown: false,
            }}
            name="Start"
            component={startScreen}
          />
          <AuthStack.Screen
            options={{
              headerShown: false,
            }}
            name="Choice"
            component={choiceScreen}
          />
          <AuthStack.Screen
            options={{
              headerShown: false,
            }}
            name="Play"
            component={playScreen}
          />
         
        </AuthStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
