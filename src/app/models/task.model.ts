export type TaskStatus = 'pending' | 'completed'

export interface Task {
  id?: string;
  title: string;
  status: TaskStatus;
}
