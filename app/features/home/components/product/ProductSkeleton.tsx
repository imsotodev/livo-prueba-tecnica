function ProductSkeleton() {
  return (
    <ul className="flex flex-col gap-5 px-5 py-10">
      {Array.from({ length: 2 }).map((_, index) => (
        <ProductSkeletonItem key={index} />
      ))}
    </ul>
  );
}

export default ProductSkeleton;

function ProductSkeletonItem() {
  return (
    <div>
      <div className="relative bg-zinc-200 animate-pulse aspect-square p-5 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <div className="bg-zinc-300 rounded-full size-6"></div>
            <div className="bg-zinc-300 h-4 w-24 rounded"></div>
          </div>
          <div className="bg-zinc-300 h-5 w-16 rounded-full"></div>
        </div>
        <div className="grid place-content-center">
          <div className="bg-zinc-300 rounded-full px-5 py-2 w-40 h-6"></div>
        </div>
        <div className="h-60 bg-zinc-300 rounded"></div>
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="bg-zinc-300 rounded-full size-10"></div>
          ))}
          <div className="bg-zinc-300 rounded-full size-10"></div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="bg-zinc-300 h-4 w-16 rounded"></div>
          <div className="bg-zinc-300 h-4 w-20 rounded"></div>
        </div>
        <div className="flex items-center justify-between text-sm font-light mt-2">
          <div className="bg-zinc-300 h-4 w-24 rounded"></div>
          <div className="bg-zinc-300 h-4 w-20 rounded"></div>
        </div>
        <div className="grid place-content-center mt-5">
          <div className="bg-zinc-300 h-10 w-40 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
