export const createImageBlob = (file) => {
  if (!file) return;

  return window.URL.createObjectURL(file);
};

export const removeImageBlob = (blob) => window.URL.revokeObjectURL(blob);
