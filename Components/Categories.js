import React from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import colors from "../config/colors";

const items = [
  {
    id: 1,
    image: require("../assets/fashion.jpg"),
    title: "Fashion",
  },
  {
    id: 2,
    image: require("../assets/sofa.png"),
    title: "Furniture",
  },
  {
    id: 3,
    image: require("../assets/mobiles.jpg"),
    title: "Mobiles",
  },
  {
    id: 4,
    image: require("../assets/appliance.jpg"),
    title: "Appliances",
  },
  {
    id: 5,
    image: require("../assets/sports.png"),
    title: "Sports",
  },
  {
    id: 6,
    image: require("../assets/grocery.png"),
    title: "Grocery",
  },
];

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {items.map((item) => (
          <Category key={item.id} uri={item.image} title={item.title} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Categories;

const Category = ({ uri, title }) => {
  return (
    <View style={styles.category}>
      <Image style={styles.image} source={uri} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 10,
    paddingTop: 10,
    marginBottom: 10,
    // backgroundColor: "#90e0ef",
  },
  category: {
    paddingTop: 10,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 40,
    width: 50,
    resizeMode: "contain",
    // backgroundColor: "white",
    borderRadius: 100,
  },
  text: {
    color: "black",
    fontSize: 15,
    fontWeight: "300",
  },
});
