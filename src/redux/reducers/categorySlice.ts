// categorySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICategory {
  tab: string | null;
  items: Record<string, string[]>;
}

const initialState: ICategory = {
  tab: null,
  items: {
    "Clothing": [],
    "Shoes": [],
    "Bags": [],
    "Accessories": []
  },
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    toggleCategoryItem: (
      state,
      action: PayloadAction<{ group: string; item: string }>
    ) => {
      const { group, item } = action.payload;
      const groupItems = state.items[group] || [];

      const exists = groupItems.includes(item);

      state.items[group] = exists
        ? groupItems.filter((i) => i !== item) // remove item
        : [...groupItems, item]; // add item

    
    },
  },
});

export const { toggleCategoryItem } =
  categorySlice.actions;
export default categorySlice.reducer;
