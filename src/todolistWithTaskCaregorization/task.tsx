import { TasksProps } from "./todolistType";

type TaskState = {
  category: string;
  tasks: TasksProps;
};

export const Task = (props: TaskState) => {
  return (
    <>
      {props.tasks[props.category]?.map((task, index) => {
        return (
          <div key={index}>
            <p>{task.completed}</p>
            <h6>{task.title}</h6>
            <p>Description:{task.description}</p>
          </div>
        );
      })}
    </>
  );
};
