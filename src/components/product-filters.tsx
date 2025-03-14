"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useFilterStore } from "@/stores/filterStore";
import useCategories from "@/hooks/useCategories";
import { Filter, Loader2 } from "lucide-react";

export default function ProductFilters() {
  return (
    <div className="flex items-center gap-2">
      <div className="hidden md:flex items-center gap-2">
        <FiltersItem />
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="md:hidden">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
            <SheetDescription>
              Filter products by category, price, and rating
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 p-4">
            <FiltersItem />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

const FiltersItem = () => {
  const { data, isLoading, isError, error } = useCategories();
  const {
    category,
    minPrice,
    maxPrice,
    setCategory,
    setMinPrice,
    setMaxPrice,
    resetFilters,
  } = useFilterStore();

  return (
    <>
      <div className="grid md:block gap-2">
        <Label htmlFor="category" className="md:hidden">
          Category
        </Label>
        <Select value={category} onValueChange={(value) => setCategory(value)}>
          <SelectTrigger id="category">
            {!isLoading && !isError && (
              <SelectValue placeholder="Select category" />
            )}
            {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
            {isError && <p className="text-red-500">{error.message}</p>}
          </SelectTrigger>
          {data && (
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {data?.map((cat, index) => (
                <SelectItem key={`${cat.name}-${index}`} value={cat.slug}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          )}
        </Select>
      </div>

      <div className="grid md:block gap-2">
        <Label className="md:hidden">Price Range</Label>
        <div className="flex items-center gap-2">
          <Input
            type="number"
            placeholder="Min $"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="min-w-20"
          />
          <span>-</span>
          <Input
            type=""
            placeholder="Max $"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="min-w-20"
          />
        </div>
      </div>

      {(category || minPrice || maxPrice) && (
        <Button
          variant="ghost"
          onClick={resetFilters}
          className="hidden md:flex"
        >
          Reset
        </Button>
      )}

      <Button
        onClick={resetFilters}
        variant="outline"
        className="mt-2 md:hidden"
      >
        Reset Filters
      </Button>
    </>
  );
};
