import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters";
import { AppColors } from "./colors";

export const sharedPaddingHorizontal = s(12);

export const commonStyles = StyleSheet.create({
    shadow: {
             
        // Android
        elevation: 4,
        // IOS
        shadowColor: AppColors.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: .2,
        shadowRadius: 4,
    }
})