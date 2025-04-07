# Task Management Dashboard

A responsive task management app built with Vite, TypeScript, React, shadcn/ui, Tailwind CSS, and React Router. Manage tasks with add/edit/delete, filter by status, sort by due date, and local storage persistence.

## Features

- Add, edit, delete tasks
- Filter by status (All, Pending, In Progress, Completed)
- Sort by due date (asc/desc)
- Views: All Tasks & Completed Tasks
- Responsive UI with modal forms
- Task persistence in local storage

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- React Router
- Context API

## Setup

1. **Clone & Install:**
   ```bash
   git clone <repository-url>
   cd task-dashboard
   npm install


## Folder Structure

   src/
├── components/      # UI components
├── context/         # TaskContext.tsx
├── types/           # task.ts
├── routes/          # Navigation.tsx
├── App.tsx
├── main.tsx
├── index.css
└── tailwind.config.js