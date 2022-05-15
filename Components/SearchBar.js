import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const SearchBar = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.searchbar}>
          <MaterialCommunityIcons
            name="magnify"
            color="grey"
            size={20}
            style={{ padding: 5 }}
          />
          <Text style={styles.placeholder}>Search for Products</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.medium,
    height: 55,
    alignItems: "center",
  },
  searchbar: {
    borderRadius: 3,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    backgroundColor: colors.white,
  },
  placeholder: {
    fontSize: 15,
    color: "grey",
  },
});
