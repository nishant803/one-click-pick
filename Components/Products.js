import React from "react";

import { StyleSheet, View, ScrollView } from "react-native";
import { addItem, incCount, addToWishlist } from "../redux/Actions/Actions";
import { useDispatch } from "react-redux";
import Product from "./Product";

const productList = [
  {
    catergory: "fashion",
    title: "Men Slim Fit Checkered Casual Shirt",
    rating: 4,
    price: 50,
    image: require("../assets/shirt.jpg"),
  },
  {
    catergory: "fashion",
    title: "Men Slim Fit Checkered Casual Shirt",
    rating: 3,
    price: 80,
    image: require("../assets/jeans.jpg"),
  },
  {
    catergory: "fashion",
    title: "Men Slim Fit Checkered Casual Shirt",
    rating: 3,
    price: 80,
    image: require("../assets/jeans.jpg"),
  },
];

const Products = () => {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(addItem(product));
    dispatch(incCount());
  };

  const handleWishlist = (product) => {
    dispatch(addToWishlist(product));
  };
  return (
    <ScrollView style={{ paddingBottom: 250 }}>
      <View style={styles.container}>
        {productList.map((item, index) => (
          <Product
            key={index}
            title={item.title}
            price={item.price}
            handleWishlist={() => handleWishlist(item)}
            rating={item.rating}
            image={item.image}
            onPress={() => addToCart(item)}
            btn1="Add to cart"
            btn2="Buy Now"
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Products;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {},
  product: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: 200,
    // height: 100,
    flexDirection: "row",
  },
  image: {
    height: 200,
    width: 180,
  },
  description: {
    marginLeft: 10,
    justifyContent: "space-evenly",
  },
});
