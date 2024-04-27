import React from "react";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import UserAccountScreen from "../screens/UserAccountScreen";
import TicketScreen from "../screens/TicketScreen";
import { COLORS, SPACING, FONTSIZE } from "../theme/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.Black,
          borderTopWidth: 0,
          height: SPACING.space_10 * 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={[styles.activeBackground, focused ? { backgroundColor: COLORS.Orange}: {}]}>
                <Ionicons
                  name="videocam-outline"
                  size={FONTSIZE.size_30}
                  color={COLORS.White}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={[styles.activeBackground, focused ? { backgroundColor: COLORS.Orange}: {}]}>
                <Ionicons
                  name="search-outline"
                  size={FONTSIZE.size_30}
                  color={COLORS.White}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={UserAccountScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={[styles.activeBackground, focused ? { backgroundColor: COLORS.Orange}: {}]}>
                <Ionicons
                  name="person-add-outline"
                  size={FONTSIZE.size_30}
                  color={COLORS.White}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={[styles.activeBackground, focused ? { backgroundColor: COLORS.Orange}: {}]}>
                <Ionicons
                  name="ticket-outline"
                  size={FONTSIZE.size_30}
                  color={COLORS.White}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeBackground: {
    backgroundColor: COLORS.Black,
    padding: SPACING.space_12,
    borderRadius: SPACING.space_18 * 10,
  },
});

export default TabNavigator;
