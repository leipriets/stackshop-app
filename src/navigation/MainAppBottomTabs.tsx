import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather, Entypo } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/profile/ProfileScreen";
import HomeScreen from "../screens/home/HomeScreen";
import { AppColors } from "../styles/colors";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import SettingsScreen from "../screens/profile/SettingsScreen";

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => Alert.alert("Drawer")} />
    </DrawerContentScrollView>
  );
};

const ProfileDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      id={undefined}
      screenOptions={{ drawerType: "slide" }}
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default function MainAppBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColors.primary,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Shop"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="home" size={size} color={color} />;
          },
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Profile"
        component={ProfileDrawerNavigation}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="user" size={size} color={color} />;
          },
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
