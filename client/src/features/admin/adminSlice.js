import { createSlice } from "@reduxjs/toolkit";
import { removeImageBlob } from "../../utils/handleImageBlob";

const initialState = {
  user: null,
  isActiveSidebar: false,
  photos: [
    {
      id: 0,
      blob: null,
    },
  ],
};

const slice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    authenticatedUser(state, action) {
      state.user = action.payload;
    },
    toggleSidebar(state, action) {
      state.isActiveSidebar = action.payload;
    },
    addNewPhoto(state, action) {
      state.photos.push({
        id: state.photos.length,
        blob: null,
      });
    },
    createPhotoPreview(state, action) {
      const currentPhoto = state.photos.at(action.payload.selectedPhoto);

      currentPhoto.blob = action.payload.blob || null;
    },
    removePhotoBlob(state, action) {
      removeImageBlob();

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
      state.photos = [
        {
          id: 0,
          blob: null,
        },
      ];
    },
  },
});

export const photosSelector = (store) => store.admin.photos;
export const singlePhotoSelector = (currentPhotoIndex) => (store) =>
  store.admin.photos.at(currentPhotoIndex);

export default slice.reducer;

export const {
  authenticatedUser,
  toggleSidebar,
  addNewPhoto,
  createPhotoPreview,
  removePhotoBlob,
  clearPhotos,
} = slice.actions;
