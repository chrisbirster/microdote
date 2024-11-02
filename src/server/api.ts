"use server";

import { getRequestEvent } from "solid-js/web";
import type { Task } from "../types";

// Helper function to safely convert BigInt to Number
const bigIntToNumber = (value: BigInt): number => {
  const num = Number(value);
  if (!Number.isSafeInteger(num)) {
    throw new Error(`Value ${value} exceeds Number.MAX_SAFE_INTEGER`);
  }
  return num;
};

export const getAllTasks = async (email: string): Promise<Task[]> => {
  const event = getRequestEvent();
  const db = event?.locals.db;
  const result = await db.execute({
    sql: `SELECT id, text, completed FROM tasks WHERE email = ? ORDER BY id DESC;`,
    args: [email],
  });

  return result.rows.map((row: any) => ({
    id: row.id,
    text: row.text,
    completed: Boolean(row.completed),
  }));
};

export const createTask = async (
  text: string,
  email: string,
): Promise<Task> => {
  const event = getRequestEvent();
  const db = event?.locals.db;
  const result = await db.execute({
    sql: `INSERT INTO tasks (text, completed, email) VALUES (?, ?, ?);`,
    args: [text, false, email],
  });

  const data = {
    id: bigIntToNumber(result.lastInsertRowid),
    text,
    completed: false,
    email,
  };
  return data;
};

export const updateTask = async (
  id: number,
  completed: boolean,
): Promise<void> => {
  const event = getRequestEvent();
  const db = event?.locals.db;
  await db.execute({
    sql: `UPDATE tasks SET completed = ? WHERE id = ?;`,
    args: [completed, id],
  });
};

export const deleteTaskById = async (id: number): Promise<void> => {
  const event = getRequestEvent();
  const db = event?.locals.db;
  await db.execute({
    sql: `DELETE FROM tasks WHERE id = ?;`,
    args: [id],
  });
};
