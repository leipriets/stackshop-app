import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";

const genderFilterList = ["All", "Female", "Male"];

interface ICategoryTabs {
    onTabChange?:  (tab: string) => void;
}

const CategoryTabs = ({ onTabChange }: ICategoryTabs) => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <View style={styles.containerTabs}>
      {genderFilterList.map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => handleTabPress(tab)}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
        >
          <Text
            style={[styles.tabText, activeTab === tab && styles.activeTabText]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoryTabs;

const styles = StyleSheet.create({
  containerTabs: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: vs(10),
    marginHorizontal: s(30),
    paddingTop: vs(21),
    gap: 10,
  },
  tab: {
    paddingVertical: s(8),
    paddingHorizontal: s(16),
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    width: s(80),
  },
  activeTab: {
    backgroundColor: "#007AFF",
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  tabText: {
    fontWeight: "500",
    color: "#333",
    textAlign: "center",
  },
  activeTabText: {
    color: "#fff",
  },
});
