import { z } from "zod";

interface Props {
  color1: string | null;
  color2: string | null;
}

const isUrl = z.string().url();

function ProductColors({ color1, color2 }: Props) {
  const renderColorButton = (color: string | null) => {
    if (!color) return null;

    const isImage = isUrl.safeParse(color).success;

    return (
      <button className="rounded-full transition-colors">
        {isImage ? (
          <img className="size-8 rounded-full" src={color} alt="Color option" />
        ) : (
          <div
            className="size-8 rounded-full"
            style={{ backgroundColor: color }}
          />
        )}
      </button>
    );
  };

  return (
    <div className="absolute bottom-3 left-0 flex justify-center w-full gap-2 p-2">
      {renderColorButton(color1)}
      {renderColorButton(color2)}
    </div>
  );
}

export default ProductColors;
