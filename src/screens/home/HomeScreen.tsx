import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { s, vs } from "react-native-size-matters";
import { useDispatch } from "react-redux";

import AppSafeView from "../../components/view/AppSafeView";
import AppText from "../../components/texts/AppText";
import AppTextInput from "../../components/inputs/AppTextInput";
import { openModal } from "../../redux/reducers/modalSlice";
import ModalFilterCategories from "../../components/modal/ModalFilterCategories";

const items = [
  {
    id: "1",
    title: "Lorem ipsum dolor sit amet consectetur",
    price: "$17.00",
    image: require("../../assets/products_images/product1.png"),
  },
  {
    id: "2",
    title: "Lorem ipsum dolor sit amet consectetur",
    price: "$17.00",
    image: require("../../assets/products_images/product2.png"),
  },
  {
    id: "3",
    title: "Lorem ipsum dolor sit amet consectetur",
    price: "$17.00",
    image: require("../../assets/products_images/product3.png"),
  },
  {
    id: "4",
    title: "Lorem ipsum dolor sit amet consectetur",
    price: "$17.00",
    image: require("../../assets/products_images/product4.png"),
  },
  {
    id: "5",
    title: "Lorem ipsum dolor sit amet consectetur",
    price: "$17.00",
    image: require("../../assets/products_images/product5.png"),
  },
  {
    id: "6",
    title: "Lorem ipsum dolor sit amet consectetur",
    price: "$17.00",
    image: require("../../assets/products_images/product6.png"),
  },
  {
    id: "7",
    title: "Lorem ipsum dolor sit amet consectetur",
    price: "$18.00",
    image: "",
  },
];

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(
      openModal({ type: "Info", props: { message: "Hello from modal!" } })
    );
  };

  return (
    <>
      <AppSafeView style={styles.container}>
        <View style={styles.header}>
          <AppText variant="bold" style={styles.shopText}>Shop</AppText>
          <View style={styles.searchContainer}>
            <AppTextInput
              value=""
              onChangeText={() => {}}
              placeholder="Search"
              style={styles.searchInput}
            />
            <TouchableOpacity
              style={styles.closeSearchIcon}
            >
              {/* <Feather name="x" size={20} color="#0042E0" /> */}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.allItemsHeader}>
          <Text style={styles.allItemsText}>All Items</Text>
          <TouchableOpacity onPress={handleOpenModal}>
            <MaterialIcons name="tune" size={20} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.itemsContainer}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: vs(10),
          }}
          renderItem={({ item }) => (
            <View style={styles.itemCard}>
              <Image source={item.image} style={styles.itemImage} />
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          )}
        />
      </AppSafeView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, backgroundColor: "#fff" },

  headerShopContainer: {
    flexDirection: "row",
    marginBottom: 23,
    marginHorizontal: 20,
  },
  inputSearch: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5EBFC",
    marginTop: vs(5),
    borderRadius: 18,
    paddingVertical: 9,
  },

  header: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  shopText: { fontSize: 28, fontWeight: "bold" },
  searchContainer: {
    width: s(248),
    flexDirection: "row",
    marginTop: 12,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    alignItems: "center",
  },
  searchInput: {
    fontSize: 16,
    height: vs(36),
    width: s(238),
    backgroundColor: "#E5EBFC",
  },
  closeSearchIcon: {
    position: "absolute",
    top: vs(17),
    right: s(12),
  },
  allItemsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  allItemsText: { fontSize: 18, fontWeight: "bold" },
  itemsContainer: { paddingBottom: 80 },
  itemCard: {
    margin: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 8,
    width: s(145),
  },
  itemImage: { height: 140, borderRadius: 10 },
  itemTitle: { marginTop: 8, fontSize: 12 },
  itemPrice: { fontWeight: "bold", marginTop: 4 },
});
