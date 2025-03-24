import { Todo } from "@/lib/types";

export async function getTodos(): Promise<Todo[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10",
    {
      next: {
        tags: ["todos"],
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Помилка при отриманні todos");
  }

  return res.json();
}
