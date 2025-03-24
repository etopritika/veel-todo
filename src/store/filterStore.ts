import { create } from "zustand";

export type Filter = "all" | "active" | "completed";

interface FilterState {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  filter: "all",
  setFilter: (filter) => set({ filter }),
}));
