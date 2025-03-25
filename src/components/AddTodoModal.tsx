"use client";
import { useForm } from "react-hook-form";
import { useModal } from "../lib/providers/ModalProvider";
import { TodoInput, todoSchema } from "@/lib/schemas/todoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./ui/Button";
import Textarea from "./ui/Textarea";
import { useAddTodo } from "@/hooks/useAddTodo";

export default function AddTodoModal() {
  const { setClose } = useModal();
  const { mutate, isPending } = useAddTodo();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoInput>({
    resolver: zodResolver(todoSchema),
  });

  const onSubmit = (data: TodoInput) => {
    mutate(data, {
      onSuccess: () => {
        setClose();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Textarea
          {...register("title")}
          placeholder="Enter your task..."
          rows={3}
        />
        {errors.title && (
          <p className="text-sm text-danger mt-1">{errors.title.message}</p>
        )}
      </div>

      <div className="flex justify-between space-x-2">
        <Button type="button" onClick={setClose} variant="secondary" size="sm">
          Cancel
        </Button>
        <Button type="submit" variant="primary" size="sm" isLoading={isPending}>
          Add
        </Button>
      </div>
    </form>
  );
}
