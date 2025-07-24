import React, { useMemo, useState } from "react";
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { s, vs } from "react-native-size-matters";
import { Feather, AntDesign } from "@expo/vector-icons";

import { closeModal } from "../../redux/reducers/modalSlice";
import { RootState } from "../../redux/store";
import { SCREEN_HEIGHT } from "../../contstants/contants";
import AppText from "../texts/AppText";
import CategoryTabs from "./CategoryTabs";
import CollapsibleCategory from "./CollapsibleCategory";
import {
  categoriesAll,
  categoriesFemale,
  categoriesMale,
} from "../../contstants/categories";

export default function ModalFilterCategories() {
  const dispatch = useDispatch();
  const { isOpen, modalType, modalProps } = useSelector(
    (state: RootState) => state.modal
  );

  const [selectedGender, setSelectedGender] = useState<string | undefined>(
    "All"
  );

  const selectedCategoryState = useSelector(
    (state: RootState) => state.category
  );

  const categoryList = useMemo(() => {
    switch (selectedGender) {
      case "All":
        return categoriesAll;
      case "Male":
        return categoriesMale;
      case "Female":
        return categoriesFemale;
      default:
        return categoriesAll;
    }
  }, [selectedGender]);

  if (!isOpen) return null;

  let hasSelectedCategory = false;

  if (
    Object.keys(selectedCategoryState.items["Clothing"]).length > 0 ||
    Object.keys(selectedCategoryState.items["Shoes"]).length > 0 ||
    Object.keys(selectedCategoryState.items['Bags']).length > 0 ||
    Object.keys(selectedCategoryState.items['Accessories']).length > 0
  ) {
    hasSelectedCategory = true;
  }


  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="slide"
      onRequestClose={() => dispatch(closeModal())}
    >
      <View style={styles.container}>
        <View style={styles.headerTitle}>
          <AppText variant="bold">All Categories</AppText>
          <TouchableOpacity onPress={() => dispatch(closeModal())}>
            {hasSelectedCategory ? (
              <AntDesign name="check" size={24} color="black" />
            ) : (
              <Feather name="x" size={20} color="black" />
            )}
          </TouchableOpacity>
        </View>

        <CategoryTabs
          onTabChange={(tab) => {
            setSelectedGender(tab);
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {categoryList.map((category) => (
            <CollapsibleCategory
              key={category.title}
              tab={selectedGender}
              title={category.title}
              icon={category.icon}
              items={category.items}
            />
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: SCREEN_HEIGHT,
    paddingVertical: vs(13),
    paddingHorizontal: s(13),
  },
  headerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modal: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
