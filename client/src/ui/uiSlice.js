import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  verifyMobile: {
    isMobile: window.innerWidth < 1024,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    isTablet: window.innerWidth > 480 && window.innerWidth < 1024,
    isLarge: window.innerWidth >= 1024,
    isExtraLarge: window.innerWidth > 1280,
    isBiggerThanMobile: window.innerWidth > 480,
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
    resize(state, action) {
      state.verifyMobile = {
        isMobile: window.innerWidth < 1024,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        isTablet: window.innerWidth > 480 && window.innerWidth < 1024,
        isLarge: window.innerWidth >= 1024,
        isExtraLarge: window.innerWidth > 1024 && window.innerWidth <= 1280,
        isBiggerThanMobile: window.innerWidth > 480,
      };
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
  resize,
} = slice.actions;
