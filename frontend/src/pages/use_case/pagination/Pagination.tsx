import { Pagination as MuiPagination } from "@mui/material";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  return (
    <div className="flex justify-center mt-16">
      <MuiPagination
        count={totalPages}
        page={currentPage}
        shape="rounded"
        size="large"
        siblingCount={1}
        className="text-blue-600"
      />
    </div>
  );
}
