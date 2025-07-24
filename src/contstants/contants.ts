import { Platform, Dimensions } from "react-native";

export const IS_Android = Platform.OS === "android";

export const SCREEN_HEIGHT = Dimensions.get("window").height;
