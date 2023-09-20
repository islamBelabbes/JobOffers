import { create } from "zustand";

export const useModal = create((set) => ({
  modals: {
    loginModal: false,
    SignUpModal: false,
    filterModal: false,
  },
  openModal: (modal) =>
    set((state) => {
      const newModalsState = Object.keys(state.modals).reduce((acc, name) => {
        acc[name] = false;
        return acc;
      }, {});
      return { modals: { ...newModalsState, [modal]: true } };
    }),
  closeModal: () =>
    set((state) => {
      const newModalsState = Object.keys(state.modals).reduce((acc, name) => {
        acc[name] = false;
        return acc;
      }, {});
      return { modals: newModalsState };
    }),
}));

export const initialFilter = {
  title: "",
  location: "",
  salary: "",
  date: "",
  type: "",
};

export const useFilter = create((set) => ({
  filter: { ...initialFilter },
  setFilter: (payload) =>
    set((state) => {
      return { filter: { ...state.filter, ...payload } };
    }),

  resetFilter: () => set({ filter: { ...initialFilter } }),
}));
