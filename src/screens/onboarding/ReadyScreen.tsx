import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import AppSafeView from "../../components/view/AppSafeView";
import { s, vs } from "react-native-size-matters";
import AppText from "../../components/texts/AppText";
import { DotActive, DotDisabled } from "../../assets/icons";
import AppButton from "../../components/buttons/AppButton";
import { AppColors } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";

const ReadyScreen = () => {

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
              source={require("../../assets/images/ReadyCover.png")}
              resizeMode={"cover"}
              style={styles.cardImage}
            />
            <View style={styles.cardTextContainer}>
              <AppText style={styles.cardTextTitle} variant="bold">
                {"Seamless Shopping Experience"}
              </AppText>
            </View>
            <AppText style={styles.cardSubText}>
              {"Add to cart, track orders, and check out effortlessly with our simple and secure interface."}
            </AppText>
            <View style={styles.centerView}>
              <AppButton
                backgroundColor={AppColors.vibrantBlue}
                style={styles.button}
                onPress={() => navigation.navigate("Auth")}
                title="Get Started"
              />
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: s(53),
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <DotDisabled />
              <DotDisabled />
              <DotDisabled />
              <DotActive />
            </View>
          </View>
        </View>
      </ImageBackground>
    </AppSafeView>
  );
};

export default ReadyScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: vs(8),
    paddingHorizontal: s(18),
    marginBottom: s(37),
  },
  flex1: {
    flex: 1,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: s(30),
    paddingBottom: s(51),
    marginBottom: s(20),
    marginHorizontal: s(25),
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
    height: s(328),
    width: s(300),
    marginBottom: 26,
    borderTopLeftRadius: s(20),
    borderTopRightRadius: s(20),
  },
  cardTextContainer: {
    alignItems: "center",
    marginBottom: s(4),
  },

  cardTextTitle: {
    color: "#202020",
    fontSize: s(20),
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: s(10),
    flexWrap: 'wrap'
  },  

  cardSubText: {
    color: "#000000",
    fontSize: s(12),
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
    justifyContent: "center",
    alignItems: "center",
  },
});
