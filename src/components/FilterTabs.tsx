"use client";
import Button from "@/components/ui/Button";
import { useFilterStore } from "@/store/filterStore";

type Filter = "all" | "active" | "completed";

export default function FilterTabs() {
  const { filter, setFilter } = useFilterStore();

  const filters: { label: string; value: Filter }[] = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <nav aria-label="Todo filters">
      <ul className="flex space-x-2">
        {filters.map(({ label, value }) => {
          const isActive = filter === value;

          return (
            <li key={value}>
              <Button
                variant={isActive ? "primary" : "ghost"}
                size="sm"
                onClick={() => setFilter(value)}
              >
                {label}
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
