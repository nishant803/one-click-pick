import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Products from "../Components/Products";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../Screens/HomeScreen";
import CartScreen from "../Screens/CartScreen";
import AccountScreen from "../Screens/AccountScreen";
import WishListScreen from "../Screens/WishListScreen";

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
        component={WishListScreen}
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
        component={CartScreen}
      />

      <Tab.Screen
        name="Account"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
}
export default AppNavigator;
