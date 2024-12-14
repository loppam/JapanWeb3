import { useState, useEffect } from "react";
import { IMAGE_STATES, FALLBACK_IMAGE, ImageState } from "../constants/images";

export function useImageFallback(src: string) {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [imageState, setImageState] = useState<ImageState>(IMAGE_STATES.LOADING);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    const handleLoad = () => setImageState(IMAGE_STATES.LOADED);
    const handleError = () => {
      setImageSrc(FALLBACK_IMAGE);
      setImageState(IMAGE_STATES.ERROR);
    };

    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);

    return () => {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleError);
    };
  }, [src]);

  return {
    imageSrc,
    imageState,

  };
}
