export const imgSrc = (imgPath: string) => {
  if (!imgPath) {
    throw new Error("Image path is mandatory");
  }

  return imgPath;
};
