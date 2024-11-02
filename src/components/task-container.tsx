import { Component, JSX } from "solid-js";

interface TaskContainerProps {
  children?: JSX.Element;
}

export const TaskContainer: Component<TaskContainerProps> = ({ children }) => {
  return (
    <div class="flex-1 p-4 z-10">
      <div class="max-w-sm mx-auto">
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <h2 class="text-2xl font-semibold mb-4 text-center">My Tasks</h2>
          {children}
        </div>
      </div>
    </div>
  );
};
