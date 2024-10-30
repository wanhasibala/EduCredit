import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";
import { Home, Notification, MyCourse, Profile } from "../screen/index";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    position: "absolute",
    bottom: 20,
    right: 20,
    left: 20,
    elevation: 0,
    height: 60,
    borderRadius: 99, 
    paddingBottom: 2,
    paddingTop: 2
  },
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions} >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? "#133D60" : "#fff",
                  paddingHorizontal: 8,
                  paddingVertical: 7,
                  borderRadius: 99,
                }}
              >
                <Ionicons
                  name="home"
                  size={24}
                  color={focused ? "#EDEDED" : COLORS.gray2}
                />
              </View>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MyCourse"
        component={MyCourse}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? "#133D60" : "#fff",
                  paddingHorizontal: 8,
                  paddingVertical: 6,
                  borderRadius: 99,
                }}
              >
                <Ionicons
                  name="play-circle"
                  size={28}
                  color={focused ? "#EDEDED" : COLORS.gray2}
                />
              </View>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? "#133D60" : "#fff",
                  padding: 8,
                  borderRadius: 20,
                }}
              >
                <Ionicons
                  name="notifications"
                  size={24}
                  color={focused ? "#EDEDED" : COLORS.gray2}
                />
              </View>
            );
          },
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? "#133D60" : "#fff",
                  padding: 8,
                  borderRadius: 20,
                }}
              >
                <Ionicons
                  name="person"
                  size={24}
                  color={focused ? "#EDEDED" : COLORS.gray2}
                />
              </View>
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
