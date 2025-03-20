import type { Image } from "~/common/entity/product";

interface Props {
  images: Image[];
}

function ProductImages({ images }: Props) {
  const [front, side] = images;
  const frontSrc =
    front?.image?.image ??
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5kCepNdhZvDKJtmPAIWnloSdTal7N1CQaA&s";
  const sideSrc =
    side?.image?.image ??
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5kCepNdhZvDKJtmPAIWnloSdTal7N1CQaA&s";
  return (
    <div draggable={false} className="group relative cursor-crosshair select-none flex items-center justify-center">
      <img
        draggable={false}
        loading="lazy"
        src={frontSrc}
        className="mix-blend-multiply flex group-hover:scale-50 transition group-hover:opacity-0 duration-300 p-5"
        alt="front iamge"
      />
      <img
        draggable={false}
        loading="lazy"
        src={sideSrc}
        className="mix-blend-multiply scale-50 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition absolute top-0 duration-300 p-5"
        alt="front iamge"
      />
    </div>
  );
}

export default ProductImages;
