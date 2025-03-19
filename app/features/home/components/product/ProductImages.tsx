import type { Image } from "~/common/entity/product";

interface Props {
  images: Image[];
}

function ProductImages({ images }: Props) {
  const [front, side] = images;
  return (
    <div className="group relative">
      <img
        src={front.image.image}
        className="mix-blend-multiply flex group-hover:scale-50 transition group-hover:opacity-0 duration-300 p-5"
        alt="front iamge"
      />
      <img
        src={side.image.image}
        className="mix-blend-multiply scale-50 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition absolute top-0 duration-300 p-5"
        alt="front iamge"
      />
    </div>
  );
}

export default ProductImages;
