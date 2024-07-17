import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  verifyMobile: {
    isMobile: window.innerWidth <= 480,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  },
  isOpenHamb: false,
  navBarHeight: "0px",
  modal: {
    isOpenModal: false,
    content: {},
  },
  isMarmoraria: true,
};

const slice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    verifyNavHeight(state, action) {
      state.navBarHeight = action.payload;
    },
    toggleHamb(state, action) {
      state.isOpenHamb = action.payload;
    },
    openModal(state, action) {
      state.modal = {
        isOpenModal: true,
        content: action.payload,
      };
    },
    closeModal(state) {
      state.modal = {
        isOpenModal: false,
        content: {},
      };
    },
    changePageTheme(state, action) {
      state.isMarmoraria = action.payload;
      state.isOpenHamb = false;
    },
  },
});

export default slice.reducer;
export const {
  verifyNavHeight,
  toggleHamb,
  openModal,
  closeModal,
  changePageTheme,
} = slice.actions;
