import db from "./db";
import type { Task } from "../types";

// Helper function to safely convert BigInt to Number
function bigIntToNumber(value: BigInt): number {
  "use server";
  const num = Number(value);
  if (!Number.isSafeInteger(num)) {
    throw new Error(`Value ${value} exceeds Number.MAX_SAFE_INTEGER`);
  }
  return num;
}

export async function getAllTasks(email: string): Promise<Task[]> {
  "use server";
  const result = await db().execute({
    sql: `SELECT id, text, completed FROM tasks WHERE email = ? ORDER BY id DESC;`,
    args: [email],
  });

  return result.rows.map((row: any) => ({
    id: row.id,
    text: row.text,
    completed: Boolean(row.completed),
  }));
}

export async function createTask(text: string, email: string): Promise<Task> {
  "use server";
  const result = await db().execute({
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
}

export async function updateTask(
  id: number,
  completed: boolean,
): Promise<void> {
  "use server";
  await db().execute({
    sql: `UPDATE tasks SET completed = ? WHERE id = ?;`,
    args: [completed, id],
  });
}

export async function deleteTaskById(id: number): Promise<void> {
  "use server";
  await db().execute({
    sql: `DELETE FROM tasks WHERE id = ?;`,
    args: [id],
  });
}
