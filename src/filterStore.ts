import { create } from "zustand";
import { persist } from "zustand/middleware";
import Filters from "./entities/Filters";

interface FilterState extends Filters {
  setCategory: (category: string) => void;
  setMinPrice: (minPrice: string) => void;
  setMaxPrice: (maxPrice: string) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>()(
  persist(
    (set) => ({
      category: "",
      minPrice: "",
      maxPrice: "",
      rating: "",
      setCategory: (category) => set({ category }),
      setMinPrice: (minPrice) => set({ minPrice }),
      setMaxPrice: (maxPrice) => set({ maxPrice }),
      resetFilters: () =>
        set({
          category: "",
          minPrice: "",
          maxPrice: "",
        }),
    }),
    {
      name: "filters-storage",
    }
  )
);
