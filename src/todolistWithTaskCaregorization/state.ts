import { TasksProps, TodolistsProps } from "./todolistType";

export const Categories: TodolistsProps = [
  { categoryId: "1", categoryTitle: "Work" },
  { categoryId: "2", categoryTitle: "Personal" },
];

export const Tasks: TasksProps = {
  "1": [
    {
      title: "Finish report",
      description: "Complete the financial report for Q2",
      category: "1",
      completed: false,
      priority: 1,
    },
  ],
  "2": [
    {
      title: "Buy groceries",
      description: "Milk, Bread, Cheese",
      category: "2",
      completed: false,
    },
  ],
};
