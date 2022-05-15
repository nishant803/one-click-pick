import React from "react";
import { Image, StyleSheet, View } from "react-native";
// import Slider from "./src/screens/Slider";

const AdsCarousel = () => {
  return (
    <View style={styles.container}>
      {/* <Slider /> */}
      <Image style={styles.Image} source={require("../assets/ad.jpg")} />
    </View>
  );
};

export default AdsCarousel;

const styles = StyleSheet.create({
  container: {},
  Image: { height: 180, width: "100%" },
});
