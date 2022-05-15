import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../Components/Screen";
import { useSelector } from "react-redux";
import Product from "../Components/Product";

const WishListScreen = () => {
  const list = useSelector((state) => state.wishList);

  return (
    <Screen style={styles.container}>
      {list.map((item) => (
        <Product
          key={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.image}
          onPress={() => handleRemove(item)}
          btn1="Add To Cart"
        />
      ))}
    </Screen>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({
  container: {},
});
