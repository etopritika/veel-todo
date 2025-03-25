import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/lib/api/todo";

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
};
