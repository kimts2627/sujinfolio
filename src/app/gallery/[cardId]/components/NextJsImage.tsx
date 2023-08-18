import Image from "next/image";
import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
  Slide,
} from "yet-another-react-lightbox";

type NextJsImageProps = {
  slide: Slide;
  rect: DOMRect;
};

const isNextJsImage = (slide: Slide) => {
  return (
    isImageSlide(slide) &&
    typeof slide.width === "number" &&
    typeof slide.height === "number"
  );
};

const NextJsImage = ({ slide, rect }: NextJsImageProps) => {
  const { imageFit } = useLightboxProps().carousel;
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isNextJsImage(slide)) return undefined;

  const width = !cover
    ? Math.round(
        Math.min(
          rect.width,
          (rect.height / (slide.height ?? 0)) * (slide.width ?? 0)
        )
      )
    : rect.width;

  const height = !cover
    ? Math.round(
        Math.min(
          rect.height,
          (rect.width / (slide.width ?? 0)) * (slide.height ?? 0)
        )
      )
    : rect.height;

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        alt=""
        src={slide}
        loading="eager"
        draggable={false}
        placeholder={"blur"}
        style={{ objectFit: cover ? "cover" : "contain" }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
    </div>
  );
};

export default NextJsImage;
