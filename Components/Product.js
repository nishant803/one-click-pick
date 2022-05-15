import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./AppButton";

const Product = ({
  title,
  price,
  image,
  rating,
  onPress,
  btn1,
  btn2,
  handleWishlist,
}) => {
  return (
    <View style={styles.product}>
      <Image style={styles.image} source={image} />
      <View style={styles.description}>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>{title}</Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <Text key={i}>⭐</Text>
            ))}
        </View>

        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            color: colors.warning,
            marginVertical: 5,
          }}
        >
          ${price}
        </Text>
        <Text style={{ fontWeight: "300", color: colors.light }}>
          Free Delivery
        </Text>
        <TouchableOpacity onPress={handleWishlist}>
          <Text>Add to WishList</Text>
        </TouchableOpacity>
        <View style={styles.buttons}>
          {btn1 && (
            <AppButton
              title={btn1}
              onPress={onPress}
              backgroundColor={colors.primary}
            />
          )}
          {btn2 && (
            <AppButton
              title={btn2}
              onPress={() => console.log("press")}
              backgroundColor={colors.secondary}
            />
          )}
        </View>
      </View>
    </View>
  );
};
export default Product;
const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 10,
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
    // justifyContent: "space-evenly",
  },
});
