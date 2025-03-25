import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "@/lib/api/todo";
import { Todo } from "@/lib/types";
import { TodoInput } from "@/lib/schemas/todoSchema";

export function useAddTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TodoInput) => addTodo(data),

    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]);

      const optimisticTodo: Todo = {
        id: Math.random(),
        userId: 1,
        completed: false,
        ...newTodo,
      };

      queryClient.setQueryData<Todo[]>(["todos"], (old) =>
        old ? [optimisticTodo, ...old] : [optimisticTodo]
      );

      return { previousTodos };
    },

    onError: (_error, _newTodo, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(["todos"], context.previousTodos);
      }
    },
  });
}
