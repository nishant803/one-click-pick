import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Screen from "./Components/Screen";
import HomeScreen from "./Screens/HomeScreen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AppNavigator from "./Navigation/AppNavigator";
import { Provider } from "react-redux";
import store from "./redux/store/Store";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
