interface Props {
  size?: "sm" | "md" | "lg";
}
function Spinner({ size }: Props) {
  const sizes = {
    sm: "size-5",
    md: "size-10",
    lg: "size-20",
  };
  const defaultSize = sizes[size ?? "md"];
  return (
    <div
      className={`${defaultSize} border-4 border-primary border-b-zinc-200 animate-spin rounded-full`}
    />
  );
}

export default Spinner;
