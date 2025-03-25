# ✅ Veel Todo — Test Task

A simple, clean Todo application built with **Next.js**, **React Query**, and **Tailwind CSS** for a frontend test task from **Veel**.

---

## 🔍 Features

- ✅ Fetch & display todos from JSONPlaceholder API
- ➕ Add new todo (with optimistic UI)
- ❌ Delete todo (with confirmation modal and optimistic UI)
- 🧭 Filter todos (All / Active / Completed)
- 🎨 Responsive and minimal UI with Tailwind CSS
- ⚙️ Organized, scalable file structure and custom hooks

---

## 🧠 Tech Stack

| Layer         | Tech                                              |
| ------------- | ------------------------------------------------- |
| Framework     | [Next.js 15](https://nextjs.org/) with App Router |
| UI            | React 19, Tailwind CSS 4                          |
| Forms         | `react-hook-form` + `zod`                         |
| State Mgmt    | `zustand` for UI filters                          |
| Data Fetching | `@tanstack/react-query`                           |
| HTTP Client   | `axios`                                           |
| Icons         | `lucide-react`                                    |
| Tooling       | TypeScript, ESLint, TurboPack                     |

---

## 🗂️ Folder Structure

```
src/
├── app/                # Next.js app router entry
├── components/         # UI and page components
│   ├── ui/             # Reusable base UI components (Button, Modal, etc.)
├── hooks/              # Custom React Query hooks
├── lib/
│   ├── api/            # API functions (getTodos, addTodo, deleteTodo)
│   ├── schemas/        # Zod schemas for form validation
│   ├── providers/      # Modal and Query providers
│   ├── axios.ts        # Axios instance config
│   ├── types.ts        # Shared types
│   ├── utils.ts        # Utility functions
├── store/              # Zustand store (for filters)
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/etopritika/veel-todo.git
cd veel-todo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be running at [http://localhost:3000](http://localhost:3000)

---

## 💬 Notes

- 🔁 Optimistic UI is implemented for both **adding** and **deleting** todos
- 🧪 This app uses JSONPlaceholder as a mock API. Since it's a test API, any added or deleted todos won't be saved after page reload.

---

## ✅ Task Requirements Checklist

- [x] Fetch todos from API
- [x] Add new todo
- [x] Delete todo
- [x] Use Tailwind CSS
- [x] Use Axios or Fetch
- [x] Use React Hooks (useState, useEffect)
- [x] Filter functionality
- [x] Optimistic UI updates
- [x] React Query for API state

---

## 🧑‍💻 Author

Developed by Dmitriy Prytyka as part of a frontend test task for **Veel**.
