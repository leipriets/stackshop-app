import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../screens/onboarding/OnboardingScreen";
import StartScreen from "../screens/onboarding/StartScreen";
import ReadyScreen from "../screens/onboarding/ReadyScreen";

const Stack = createStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="ReadyScreen" component={ReadyScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;

const styles = StyleSheet.create({});
