"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";

type Filter = "all" | "active" | "completed";

export default function FilterTabs() {
  const [value, setFilter] = useState<Filter>("all");

  const filters: { label: string; value: Filter }[] = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <nav aria-label="Todo filters">
      <ul className="flex space-x-2">
        {filters.map((filter) => {
          const isActive = value === filter.value;

          return (
            <li key={filter.value}>
              <Button
                variant={isActive ? "primary" : "ghost"}
                size="sm"
                onClick={() => setFilter(filter.value)}
              >
                {filter.label}
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
