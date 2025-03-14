import Category from "@/entities/Category";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Category[]>("/v1/categories");

const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => apiClient.get().then((res) => res),
  });
};

export default useCategories;
