import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import AppSafeView from "../../components/view/AppSafeView";
import { s, vs } from "react-native-size-matters";
import AppText from "../../components/texts/AppText";
import { DotActive, DotDisabled } from "../../assets/icons";
import AppButton from "../../components/buttons/AppButton";
import { AppColors } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";


const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <AppSafeView>
      <ImageBackground
        source={require("../../assets/images/Onboarding1_Background.png")}
        resizeMode={"stretch"}
        style={styles.flex1}
      >
        <View style={styles.flex1}>
          <View style={styles.container}>
            <View style={styles.flex1}></View>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../../assets/images/OnboardingCoverImage.png")}
              resizeMode={"cover"}
              style={styles.cardImage}
            />
            <View style={styles.cardTextContainer}>
              <AppText style={styles.cardTextTitle} variant="bold">
                {"Discover Trending Deals"}
              </AppText>
            </View>
            <AppText style={styles.cardSubText}>
              {
                "Explore the latest must-haves in fashion, tech, and essentials — all in one place."
              }
            </AppText>
            <View style={styles.centerView}>
              <AppButton
                backgroundColor={AppColors.vibrantBlue}
                style={styles.button}
                onPress={() => navigation.navigate("ReadyScreen")}
                title="Continue"
              />
                <View style={styles.arrowIcon}>
                  <AntDesign name="arrowright" size={18} color="white" />
                </View>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: s(13),
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <DotDisabled />
              <DotActive />
              <DotDisabled />
              <DotDisabled />
            </View>
          </View>
        </View>
      </ImageBackground>
    </AppSafeView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: vs(8),
    paddingHorizontal: s(10),
    marginBottom: s(37),
  },
  flex1: {
    flex: 1,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: s(30),
    paddingBottom: s(31),
    marginBottom: s(30),
    marginHorizontal: s(30),
    shadowColor: "#00000029",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: s(10),
    },
    shadowRadius: s(37),
    elevation: 37,
  },
  cardImage: {
    height: 338,
    width: '100%',
    marginBottom: 46,
    borderTopLeftRadius: s(20),
    borderTopRightRadius: s(20),
  },
  cardTextContainer: {
    alignItems: "center",
    marginBottom: s(12),
  },

  cardTextTitle: {
    color: "#202020",
    fontSize: s(25),
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: s(8)
  },

  cardSubText: {
    color: "#000000",
    fontSize: s(15),
    textAlign: "center",
    marginLeft: s(41),
    width: s(227),
  },
  button: {
    marginTop: vs(20),
    paddingHorizontal: s(4),
    width: s(201),
    height: vs(40),
  },
  centerView: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
  },
  arrowIcon: {
    position: 'absolute',
    right: s(85),
    top: vs(33)
  }
});
