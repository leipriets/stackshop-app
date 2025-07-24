import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";

interface AppButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  backgroundColor?: string;
  textColor?: string;
  style?: StyleProp<TextStyle>;
  styleTitle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

const AppButton: FC<AppButtonProps> = ({
  onPress,
  title,
  backgroundColor = AppColors.primary,
  textColor = AppColors.white,
  style,
  styleTitle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: disabled ? AppColors.disabledGray : backgroundColor,
        },
        style,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text
        style={StyleSheet.flatten([
          styles.textTitle,
          { color: textColor },
          styleTitle || {},
        ])}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: AppColors.primary,
    width: "100%",
    height: vs(40),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: s(16),
  },
  textTitle: {
    padding: s(8),
    fontSize: s(16),
  },
});
