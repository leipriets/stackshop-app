import { createStackNavigator } from "@react-navigation/stack";
import { onAuthStateChanged } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SignInScreen from "../screens/auth/SignInScreen";
import OnboardingStack from "./OnboardingStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import { useEffect } from "react";
import { auth } from "../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUserData } from "../redux/reducers/userSlice";
import { RootState } from "../redux/store";
import { ActivityIndicator, View } from "react-native";
import { AppColors } from "../styles/colors";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createStackNavigator();

export default function MainAppStack() {

  const dispatch = useDispatch();
  const { userData, isLoading } = useSelector(
    (state: RootState) => state.userSlice
  );

  const isUserLoggedIn = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem("USER_DATA");

      if (storedUserData) {
        dispatch(setUserData(JSON.parse(storedUserData)));
      } else {
        dispatch(setLoading(false));
      }
    } catch (error) {
      console.error("Error reading stored user", error);
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={AppColors.primary} />
      </View>
    );
  }

  return (
    <Stack.Navigator
      id={undefined}
      screenOptions={{
        headerShown: false,
      }}
      
    >
      <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
      <Stack.Screen name="Auth" component={SignInScreen} />
      <Stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs} />
    </Stack.Navigator>
  );
}
