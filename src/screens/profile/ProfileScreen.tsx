import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { vs } from "react-native-size-matters";
import { Ellipse } from "react-native-svg";
import { EvilIcons } from "@expo/vector-icons";

import AppSafeView from "../../components/view/AppSafeView";

const ProfileScreen = () => {
  return (
    <AppSafeView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.homeHeader}>
          <Ellipse />
          <EvilIcons name="user" style={styles.userAvatar} size={34} color="black" />

          {/* <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4wbgpMmKl6/m5i7ebf6_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 40,
              height: 40,
              marginRight: 16,
            }}
          /> */}

          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#004CFF",
              borderRadius: 18,
              paddingVertical: 8,
              marginRight: 34,
            }}
            onPress={() => alert("Pressed!")}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {"My Activity"}
            </Text>
          </TouchableOpacity>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4wbgpMmKl6/wa2nqdx8_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 35,
              height: 35,
              marginRight: 11,
            }}
          />
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4wbgpMmKl6/6ahg1p4u_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 35,
              height: 35,
              marginRight: 10,
            }}
          />
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4wbgpMmKl6/hq5xq5hw_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 35,
              height: 35,
            }}
          />
        </View>
        <Text
          style={{
            color: "#202020",
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: 12,
            marginLeft: 20,
          }}
        >
          {"Hello, Romina!"}
        </Text>
        <View
          style={{
            backgroundColor: "#F8F8F8",
            borderRadius: 10,
            paddingVertical: 10,
            marginBottom: 18,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: "#202020",
              fontSize: 14,
              fontWeight: "bold",
              marginBottom: 2,
              marginLeft: 14,
            }}
          >
            {"Announcement"}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 14,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 10,
                marginRight: 37,
                flex: 1,
              }}
            >
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit luctus libero ac vulputate."
              }
            </Text>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4wbgpMmKl6/z17nnhiw_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>
        </View>
        <Text
          style={{
            color: "#202020",
            fontSize: 21,
            fontWeight: "bold",
            marginBottom: 12,
            marginLeft: 20,
          }}
        >
          {"Recently viewed"}
        </Text>
      </ScrollView>
    </AppSafeView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: vs(13),
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  homeHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 24,
  },
  userAvatar: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
});
