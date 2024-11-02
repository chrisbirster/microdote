export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export type User = {
  id: string;
  email: string;
  image: string;
  name: string;
  emailVerified: Date;
};
