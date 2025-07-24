import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { AntDesign } from "@expo/vector-icons/";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { showMessage } from "react-native-flash-message";

import { Layout1, Layout2, Layout3 } from "../../assets/SignInLayout";
import { AppColors } from "../../styles/colors";
import AppSafeView from "../../components/view/AppSafeView";
import { AppFonts } from "../../styles/fonts";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppButton from "../../components/buttons/AppButton";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { auth } from "../../config/firebase";
import { setUserData } from "../../redux/reducers/userSlice";

const authSchemaForm = yup
  .object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required.")
      .min(3, "Email must be at least 3 characters"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters."),
  })
  .required();

type FormData = yup.InferType<typeof authSchemaForm>;

const SignInScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(authSchemaForm),
  });

  const login = async (data: FormData) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      navigation.navigate("MainAppBottomTabs");

      const userDataObj = {
        uid: userCredential.user.uid,
      };

      dispatch(setUserData(userDataObj));

    } catch (error: any) {
      let errorMessage = "";

      if (error.code === "auth/user-not-found") {
        errorMessage = "User not found.";
      } else if (error.code === "auth/invalid-credential") {
        errorMessage = "Invalid credentials.";
      } else {
        errorMessage = "An error occurred during sign-in.";
      }

      showMessage({
        type: "danger",
        message: errorMessage,
      });
    }
  };

  return (
    <AppSafeView>
      <View>
        <Layout1 style={styles.layout1Style} />
        <Layout2 style={styles.layout2Style} />
        <Layout3 style={styles.layout3Style} />
      </View>
      <View style={styles.container2}>
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.subText}>
          Good to see you back!{" "}
          <AntDesign name="heart" size={15} color="black" />{" "}
        </Text>
        <View style={styles.inputMargin}>
          <AppTextInputController
            control={control}
            name={"email"}
            placeholder="Email"
          />
        </View>
        <View style={styles.inputMargin}>
          <AppTextInputController
            control={control}
            name={"password"}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <AppButton
          style={styles.loginButton}
          onPress={handleSubmit(login)}
          title="Sign in"
        />
      </View>
    </AppSafeView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: vs(10),
    backgroundColor: AppColors.white,
  },
  container2: {
    flex: 1,
    paddingTop: vs(30),
    paddingHorizontal: vs(20),
  },
  layout1Style: {
    top: 0,
    height: vs(15),
    width: s(374),
  },
  layout2Style: {
    top: 0,
    position: "absolute",
    elevation: 4,
  },
  layout3Style: {
    position: "absolute",
    top: s(200),
    right: 0,
    height: vs(151),
    width: s(138),
  },
  loginText: {
    fontSize: s(52),
    fontFamily: AppFonts.Bold,
  },
  subText: {
    fontSize: s(19),
    fontFamily: AppFonts.Medium,
  },
  inputMargin: {
    marginTop: vs(25),
    height: vs(42),
  },
  loginButton: {
    marginTop: vs(30),
  },
});
