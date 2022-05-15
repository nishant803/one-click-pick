import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AdsCarousel from "../Components/AdsCarousel";
import Categories from "../Components/Categories";
import Header from "../Components/Header";
import Products from "../Components/Products";
import SearchBar from "../Components/SearchBar";
// import AppNavigator from "../Navigation/AppNavigator";
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <Categories />
      <ScrollView>
        <AdsCarousel />
        <Products />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
