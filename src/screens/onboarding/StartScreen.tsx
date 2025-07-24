import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/view/AppSafeView";
import { s, vs } from "react-native-size-matters";
import { commonStyles } from "../../styles/sharedStyles";
import { AppColors } from "../../styles/colors";
import { CartLogoIcon } from "../../assets/icons";
import AppText from "../../components/texts/AppText";
import AppButton from "../../components/buttons/AppButton";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const StartScreen = () => {
  const navigation = useNavigation();

  return (
    <AppSafeView>
      <View style={styles.container}>
        <View style={styles.circle}>
          <CartLogoIcon />
        </View>
        <View style={styles.titleContainer}>
          <AppText style={styles.title} variant="bold">
            StackShop
          </AppText>
          <AppText style={styles.subTitle} variant="medium">
            Your Eco-Friendly Marketplace.
          </AppText>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            backgroundColor={AppColors.vibrantBlue}
            style={styles.startButton}
            onPress={() => navigation.navigate("OnboardingScreen")}
            title="Let's get started"
          />
        </View>
        <View style={styles.haveAccountContainer}>
          <AppText style={styles.textHaveAccount}>
            I already have an account
          </AppText>
          <TouchableOpacity onPress={() => navigation.navigate("Auth")} style={styles.arrowButtonContainer}>
            <View style={styles.arrowButton}>
              <AntDesign name="arrowright" size={18} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </AppSafeView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: vs(100),
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    elevation: 4,
    borderColor: AppColors.white,
    backgroundColor: AppColors.white,
    width: s(134),
    height: s(134),
    borderRadius: 100,
    paddingVertical: vs(21),
    paddingHorizontal: s(26),
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    paddingVertical: vs(24),
  },
  title: {
    color: "202020",
    fontSize: s(42),
    textAlign: "center",
  },
  subTitle: {
    paddingTop: vs(18),
    fontSize: s(19),
  },
  buttonContainer: {
    paddingHorizontal: s(10),
    marginTop: vs(106),
  },
  startButton: {
    width: s(320),
  },
  haveAccountContainer: {
    marginTop: vs(18),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textHaveAccount: {
    fontSize: s(14),
  },
  arrowButtonContainer: {
    backgroundColor: AppColors.primary,
    padding: s(5),
    borderRadius: s(12),
    marginLeft: s(10),
    justifyContent: "center",
    alignItems: "center",
  },
  arrowButton: {},
});
