import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigation/MainAppStack";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import ModalFilterCategories from "./src/components/modal/ModalFilterCategories";
import FlashMessage from "react-native-flash-message";
import { PersistGate } from "redux-persist/integration/react";
import { vs } from "react-native-size-matters";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Medium": require("./src/assets/fonts/Nunito-Medium.ttf"),
  });

  const Drawer = createDrawerNavigator();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <FlashMessage position={"top"} style={{ marginTop: vs(20) }} />
          <MainAppStack />
          <ModalFilterCategories />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({});
