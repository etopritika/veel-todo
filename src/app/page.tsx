import AddTodoButton from "@/components/AddTodoButton";
import Controls from "@/components/Controls";
import FilterTabs from "@/components/FilterTabs";
import TodoList from "@/components/TodoList";

const todoList = [
  { id: 1, userId: 1, title: "lorem", completed: false },
  { id: 2, userId: 1, title: "lorem2", completed: true },
];

export default function Home() {
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
