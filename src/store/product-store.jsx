import { create } from 'zustand';
import axios from 'axios';
import { persist } from 'zustand/middleware';

const productStore = (set) => ({
  products: [],
  cart: [],
  actionGetData: async () => {
    try {
      const resp = await axios.get('https://dummyjson.com/products');
      set({ products: resp.data.products });
    } catch (error) {
      console.log(error.message);
    }
  },
  actionAddToCart: (product) => {
    set((state) => ({ cart: [...state.cart, product] }));
  },
  actionClearCart: () => {
    set({ cart: [] });
  },
  actionRemoveFromCart: (id) => {
    set((state) => ({
      cart: state.cart.filter((item) => {
        return item.id != id;
      }),
    }));
  },
});

const persistStore = {
  name: 'product-store',
  partialize: (state) => ({ cart: state.cart }),
};

const useProductStore = create(persist(productStore, persistStore));

export default useProductStore;
