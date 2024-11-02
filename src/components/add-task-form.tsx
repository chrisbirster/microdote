import { Component, createSignal } from "solid-js";

interface AddTaskFormProps {
  onAddTask: (text: string, email: string) => void;
  email: string;
}

export const AddTaskForm: Component<AddTaskFormProps> = ({
  onAddTask,
  email,
}) => {
  const [newTaskText, setNewTaskText] = createSignal(""); // Input for new task

  const handleSubmit = () => {
    const text = newTaskText().trim();
    if (text) {
      onAddTask(text, email);
      setNewTaskText("");
    }
  };

  const handleTaskKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div id="feh-add-task" class="flex space-x-3">
      <input
        type="text"
        placeholder="Add a new task..."
        value={newTaskText()}
        onInput={(e) => setNewTaskText(e.currentTarget.value)}
        onKeyPress={handleTaskKeyPress}
        class="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button
        type="button"
        onClick={handleSubmit}
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-transform transform hover:scale-105"
      >
        Add
      </button>
    </div>
  );
};
