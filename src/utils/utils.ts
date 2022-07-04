export const imgSrc = (imgPath: string) => {
  if (!imgPath) {
    throw new Error("Image path is mandatory");
  }

  return `${process.env.PUBLIC_URL}${imgPath}`;
};
