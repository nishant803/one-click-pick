import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useSelector } from "react-redux";
import colors from "../config/colors";
import Screen from "./Screen";

const Header = () => {
  const list = useSelector((state) => state.counter);
  return (
    <Screen style={styles.container}>
      <Text style={styles.logo}>One Click Pick</Text>
      <View style={styles.cartIcon}>
        <MaterialCommunityIcons size={20} color="white" name="cart" />
        <Text style={styles.cartItems}>{list}</Text>
      </View>
    </Screen>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.medium,
    paddingBottom: 15,
  },
  logo: {
    flex: 1,
    color: colors.white,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  cartIcon: {
    paddingHorizontal: 25,
    paddingTop: 5,
    flexDirection: "row",
  },
  cartItems: {
    position: "absolute",
    right: 12,
    backgroundColor: colors.warning,
    color: "white",
    borderRadius: 100,
    width: 20,
    textAlign: "center",
    top: -8,
  },
});
