import { Skeleton } from "./ui/skeleton";

const ProductSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[185px] w-[220px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[220px]" />
        <Skeleton className="h-4 w-[180px]" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
