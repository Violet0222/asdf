import { TodolistsProps, TasksProps } from "./todolistType";
import s from "./todolist.module.css";
import { Task } from "./task";
type StateProps = {
  categories: TodolistsProps;
  tasks: TasksProps;
};

export const Todolist = (props: StateProps) => {
  return (
    <div className={s.categoryTitle}>
      {props.categories.map((t) => {
        return (
          <div key={t.categoryId}>
            <h3>{t.categoryTitle}</h3>
            <Task category={t.categoryId} tasks={props.tasks} />
          </div>
        );
      })}
    </div>
  );
};
