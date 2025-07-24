// components/CollapsibleCategory.tsx
import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
  Platform,
  UIManager,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { s, vs } from "react-native-size-matters";
import { useSelector, useDispatch } from "react-redux";

import {
  toggleCategoryItem,
} from "../../redux/reducers/categorySlice";
import { RootState } from "../../redux/store";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type SelectedCategory = { [group: string]: string[] };

interface Props {
  tab: string | undefined;
  title: string;
  icon?: any;
  items?: string[];
  selectedItems?: string[];
}

const CollapsibleCategory: React.FC<Props> = ({
  tab,
  title,
  icon,
  items = [],
}) => {
  const [expanded, setExpanded] = useState(false);

  const rawItems = useSelector((state: RootState) => state.category.items);

  const selected = useMemo(() => {
    return rawItems[title] || [];
  }, [rawItems, title]);

  const dispatch = useDispatch();

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleExpand}>
        <View style={styles.left}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={20}
          color="#333"
        />
      </TouchableOpacity>

      {expanded && (
        <View style={styles.grid}>
          {items.map((item) => {
            const isSelected = selected.includes(item);

            return (
              <TouchableOpacity
                key={item}
                style={[styles.gridItem, isSelected && styles.gridItemActive]}
                onPress={() =>
                  dispatch(toggleCategoryItem({ group: title, item }))
                }
              >
                <View style={styles.categoryList}>
                  <Text style={styles.itemText}>{item}</Text>
                  {isSelected && (
                    <AntDesign name="checkcircle" size={15} color="#007AFF" />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 10,
    elevation: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    width: s(30),
    height: vs(30),
    borderRadius: s(6),
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  grid: {
    marginTop: vs(10),
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  gridItem: {
    width: "45%",
    padding: s(10),
    borderColor: "#f3bcbc",
    borderWidth: s(1),
    borderRadius: s(8),
    alignItems: "center",
    zIndex: 1,
  },
  gridItemActive: {
    borderColor: "#007AFF",
  },
  itemText: {
    fontSize: s(14),
  },
  categoryList: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: s(5),
  },
});

export default CollapsibleCategory;
