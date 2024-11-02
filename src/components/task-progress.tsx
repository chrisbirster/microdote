import { Component } from "solid-js";
import type { Task } from "src/types";

interface TaskProgressProps {
  tasks: Task[];
}

export const TaskProgress: Component<TaskProgressProps> = ({ tasks }) => {
  const completedTaskCount = () =>
    tasks.filter((task) => task.completed).length;
  const totalTaskCount = () => tasks.length;

  return (
    <div>
      {tasks.length > 0 && (
        <div id="feh-task-progress" class="text-center mb-6 text-gray-700">
          {completedTaskCount()}/{totalTaskCount()} tasks done
        </div>
      )}
    </div>
  );
};
