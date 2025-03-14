import Product from "@/entities/Product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteState {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  clearFavorites: () => void;
}

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set) => ({
      favorites: [],
      toggleFavorite: (product) =>
        set((state) => {
          const exists = state.favorites.some((fav) => fav.id === product.id);

          if (exists) {
            return {
              favorites: state.favorites.filter((fav) => fav.id !== product.id),
            };
          } else {
            return {
              favorites: [...state.favorites, product],
            };
          }
        }),
      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: "favorites-storage",
    }
  )
);
