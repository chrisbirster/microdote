import { For, Component, Accessor } from "solid-js";
import type { Task } from "src/types";

interface TaskListProps {
  tasks: Accessor<Task[]>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TaskList: Component<TaskListProps> = ({
  tasks,
  onToggle,
  onDelete,
}) => {
  return (
    <div id="feh-task-list" class="mb-6">
      {tasks().length === 0 ? (
        <p class="text-gray-500 text-center">What are you working on today?</p>
      ) : (
        <ul class="space-y-4">
          <For each={tasks()} fallback={<div>Loading...</div>}>
            {(task) => {
              return (
                <li class="flex items-center justify-between w-full">
                  <div class="flex items-center flex-1">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => onToggle(task.id)}
                      class="form-checkbox h-5 w-5 text-red-600"
                    />
                    <span
                      class={`ml-3 text-gray-700 ${
                        task.completed ? "line-through" : ""
                      }`}
                    >
                      {task.text}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onDelete(task.id)}
                    class="text-red-500 hover:text-red-700 focus:outline-none ml-4"
                    aria-label="Delete Task"
                  >
                    <i class="fa fa-trash"></i>
                  </button>
                </li>
              );
            }}
          </For>
        </ul>
      )}
    </div>
  );
};
