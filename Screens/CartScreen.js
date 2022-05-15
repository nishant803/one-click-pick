import React, { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../Components/Screen";
import { decCount, removeItem } from "../redux/Actions/Actions";
import { useSelector, useDispatch } from "react-redux";
import Product from "../Components/Product";

const CartScreen = () => {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeItem(item));
    dispatch(decCount());
  };

  let sum = function (items, price) {
    return items.reduce(function (a, b) {
      return a + b[price];
    }, 0);
  };

  let cartTotal = sum(list, "price");

  return (
    <>
      <ScrollView>
        <Screen style={styles.container}>
          {list.map((item) => (
            <Product
              key={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              onPress={() => handleRemove(item)}
              btn1="Remove"
            />
          ))}
        </Screen>
      </ScrollView>
      <View>
        <Text>
          {list.length === 0 ? "Your Cart is Empty" : `Cart Total ${cartTotal}`}
        </Text>
      </View>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {},
});
