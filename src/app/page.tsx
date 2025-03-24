import AddTodoButton from "@/components/AddTodoButton";
import Controls from "@/components/Controls";
import FilterTabs from "@/components/FilterTabs";
import TodoList from "@/components/TodoList";
import { getTodos } from "@/lib/api/todo";

export default async function Home() {
  const todoList = await getTodos();
  return (
    <main>
      <section className="w-full max-w-md mx-auto">
        <Controls>
          <FilterTabs />
          <AddTodoButton />
        </Controls>
        <TodoList todoList={todoList} />
      </section>
    </main>
  );
}
