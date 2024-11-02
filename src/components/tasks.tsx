import { createSignal, onMount } from "solid-js";
import { AddTaskForm } from "./add-task-form";
import type { Task, User } from "src/types";
import { TaskList } from "./task-list";
import { TaskProgress } from "./task-progress";
import { TaskContainer } from "./task-container";
import {
  createTask,
  deleteTaskById,
  getAllTasks,
  updateTask,
} from "~/server/api";

type TaskProps = {
  user: User;
};

export const Tasks = ({ user }: TaskProps) => {
  const [tasks, setTasks] = createSignal<Task[]>([]);

  const fetchTasks = async (email: string) => {
    try {
      const fetchedTasks = await getAllTasks(email);
      setTasks(fetchedTasks);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  onMount(async () => {
    await fetchTasks(user.email);
  });

  const addTask = async (text: string, email: string) => {
    if (text.trim() === "") return;
    try {
      const newTask = await createTask(text, email);
      setTasks((prev) => [newTask, ...prev]);
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  const toggleTask = async (id: number) => {
    const task = tasks().find((t) => t.id === id);
    if (!task) return;

    try {
      await updateTask(id, !task.completed);
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
      );
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await deleteTaskById(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <TaskContainer>
      <TaskProgress tasks={tasks()} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      <AddTaskForm email={user.email} onAddTask={addTask} />
    </TaskContainer>
  );
};
