import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isActiveSidebar: false,
  photos: [
    {
      id: 0,
      blob: null,
    },
  ],
  isOpenModal: false,
  isAsyncHandlerLoading: false,
};

const slice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    logout(state) {
      state = {
        user: null,
        isActiveSidebar: false,
        photos: [
          {
            id: 0,
            blob: null,
          },
        ],
        isOpenModal: false,
        isAsyncHandlerLoading: false,
      };
    },
    authenticatedUser(state, action) {
      state.user = action.payload;
    },
    toggleSidebar(state, action) {
      state.isActiveSidebar = action.payload;
    },
    addNewPhoto(state, action) {
      state.photos.push({
        id: state.photos.length,
        blob: action.payload ? action.payload : null,
      });
    },
    createPhotoPreview(state, action) {
      const currentPhoto = state.photos.at(action.payload.selectedPhoto);

      currentPhoto.blob = action.payload.blob || null;
    },
    removePhotoBlob(state, action) {
      if (action.payload > 0) {
        state.photos = state.photos.filter(
          (photo) => photo.id !== action.payload,
        );

        return;
      }

      const currentPhoto = state.photos.find(
        (photo) => photo.id === action.payload,
      );

      currentPhoto.blob = null;
    },
    clearPhotos(state) {
      state.photos.forEach((photo) => {
        if (photo.blob) window.URL.revokeObjectURL(photo.blob);
      });
      state.photos = [
        {
          id: 0,
          blob: null,
        },
      ];
    },
    toggleModal(state, action) {
      state.isOpenModal = action.payload;
    },
    toggleAsyncHandlerState(state, action) {
      state.isAsyncHandlerLoading = action.payload;
    },
  },
});

export const photosSelector = (store) => store.admin.photos;
export const singlePhotoSelector = (currentPhotoIndex) => (store) =>
  store.admin.photos.at(currentPhotoIndex);
export const isAsyncHandlerLoadingSelector = (store) =>
  store.admin.isAsyncHandlerLoading;
export const isOpenModalSelector = (store) => store.admin.isOpenModal;

export default slice.reducer;

export const {
  authenticatedUser,
  toggleSidebar,
  addNewPhoto,
  createPhotoPreview,
  removePhotoBlob,
  clearPhotos,
  toggleModal,
  toggleAsyncHandlerState,
  logout,
} = slice.actions;
