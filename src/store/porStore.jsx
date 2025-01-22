import { create } from 'zustand';

// Step 1: Create Store
const porStore = (set, get) => ({
  firstName: 'Por',
  lastName: 'Trisiripisal',
  address: { street: 1234, zipcode: 567 },
  profile: ['Por', 'Trisiripisal'],
  products: [
    { id: 1, title: 'ASUS', price: 40000 },
    { id: 2, title: 'MSI', price: 59000 },
  ],
  number: 5,
  actionIncrease: () => {
    set((state) => ({ number: state.number + 1 }));
  },
  actionDecrease: () => {
    let num = get().number;
    if (num - 1 < 0) {
      return;
    }
    set((state) => ({ number: state.number - 1 }));
  },
  actionMultiply: (factor) => {
    set((state) => ({ number: state.number * factor }));
  },
});

const usePorStore = create(porStore);

export default usePorStore;
