import Spinner from "~/common/components/ui/Spinner";
import useProductQuery from "~/common/hooks/useProductQuery";
import queryStore from "~/common/stores/productFilterStore";

function ProductPagination() {
  const { pagination } = useProductQuery();
  const { page, setPage } = queryStore();

  if (!pagination)
    return (
      <div className="h-20 bg-white fixed bottom-0 min-w-sm max-w-md w-full z-10 flex items-center justify-center gap-1 px-5">
        <Spinner size="md" />
      </div>
    );
  const hasNextPage = page < pagination.num_pages;
  const hasPrevPage = page > 1;
  const nextPage = () => hasNextPage && setPage(page + 1);
  const prevPage = () => hasPrevPage && setPage(page - 1);

  const getPageNumbers = () => {
    const totalPages = pagination.num_pages;
    const visiblePages = 5;
    let start = Math.max(1, page - Math.floor(visiblePages / 2));
    let end = Math.min(totalPages, start + visiblePages - 1);
    if (end - start + 1 < visiblePages) {
      start = Math.max(1, end - visiblePages + 1);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className="h-20 bg-white fixed bottom-0 font-bold min-w-sm max-w-md w-full z-10 flex items-center justify-center gap-1 px-5">
      <div className="flex gap-1 items-center">
        <button
          onClick={() => setPage(1)}
          disabled={page === 1}
          className="disabled:grayscale-100 disabled:cursor-not-allowed border size-8 rounded bg-primary/25 border-primary text-primary grid place-content-center cursor-pointer"
        >
          {"<<"}
        </button>
        <button
          disabled={!hasPrevPage}
          onClick={prevPage}
          className="disabled:grayscale-100 disabled:cursor-not-allowed border size-8 rounded bg-primary/25 border-primary text-primary grid place-content-center cursor-pointer"
        >
          {"<"}
        </button>
      </div>
      <div className="flex gap-1 items-center">
        {getPageNumbers().map((num) => (
          <button
            onClick={() => setPage(num)}
            key={num}
            className={`border cursor-pointer active:scale-95 size-8 rounded transition grid place-content-center " ${
              page === num
                ? "bg-zinc-800 border-zinc-800 text-white"
                : "text-primary bg-primary/25 border-primary hover:bg-primary/15"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
      <div className="flex gap-1 items-center">
        <button
          disabled={!hasNextPage}
          onClick={nextPage}
          className="disabled:grayscale-100 disabled:cursor-not-allowed border size-8 rounded bg-primary/25 border-primary text-primary grid place-content-center cursor-pointer"
        >
          {">"}
        </button>
        <button
          disabled={pagination.num_pages === page}
          onClick={() => setPage(pagination.num_pages)}
          className="disabled:grayscale-100 disabled:cursor-not-allowed border size-8 rounded bg-primary/25 border-primary text-primary grid place-content-center cursor-pointer"
        >
          {">>"}
        </button>
      </div>
    </div>
  );
}

export default ProductPagination;
