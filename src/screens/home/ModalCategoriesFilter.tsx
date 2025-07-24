import { StyleSheet, Text, View, Modal } from "react-native";
import React, { FC } from "react";

interface IModalCategories {
  visible: boolean;
}

const ModalCategoriesFilter: FC<IModalCategories> = ({ visible }) => {
  return (
    <Modal>
      <Text>ModalCategoriesFilter</Text>
    </Modal>
  );
};

export default ModalCategoriesFilter;

const styles = StyleSheet.create({});
