import { Task } from '../types/task';
import { Button } from './ui/button';
import { useTasks } from '../context/TaskContext';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
}

export function TaskCard({ task, onEdit }: TaskCardProps) {
  const { deleteTask } = useTasks();

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h3 className="font-semibold">{task.title}</h3>
      <p className="text-sm text-gray-600">{task.description}</p>
      <p className="text-sm">Status: {task.status}</p>
      <p className="text-sm">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      <div className="mt-2 space-x-2">
        <Button variant="outline" size="sm" onClick={() => onEdit(task)}>
          Edit
        </Button>
        <Button variant="destructive" size="sm" onClick={() => deleteTask(task.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}