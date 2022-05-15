import React from "react";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[style, styles.container]}>{children}</SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 0 : 50,
  },
});
