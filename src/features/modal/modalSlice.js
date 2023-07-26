import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      console.log(state);
      state.isOpen = true;
    },
    cancleModal: (state) => {
      state.isOpen = false;
    },
  },
});

console.log(modalSlice);

export default modalSlice.reducer;

export const { showModal, cancleModal } = modalSlice.actions;
