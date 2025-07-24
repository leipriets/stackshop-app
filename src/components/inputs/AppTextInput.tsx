import { StyleSheet, Text, TextInput, TextStyle, View } from "react-native";
import React, { FC } from "react";
import { AppColors } from "../../styles/colors";
import { s, vs } from "react-native-size-matters";

interface AppTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric";
  style?: TextStyle;
}

const AppTextInput: FC<AppTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  style,
}) => {
  return (
    <TextInput
      value={value} 
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={[styles.input, style]}
    />
  );
};

export default AppTextInput;
  
const styles = StyleSheet.create({
  input: {
    backgroundColor: AppColors.lightGray,
    borderRadius: s(52),
    paddingLeft: 20,
    height: vs(42),
  },
});
