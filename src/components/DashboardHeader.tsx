import { Task } from '../types/task';

interface DashboardHeaderProps {
  tasks: Task[];
}

export function DashboardHeader({ tasks }: DashboardHeaderProps) {
  const statusCounts = {
    Pending: tasks.filter(t => t.status === 'Pending').length,
    'In Progress': tasks.filter(t => t.status === 'In Progress').length,
    Completed: tasks.filter(t => t.status === 'Completed').length,
  };

  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold">Task Management Dashboard</h1>
      <div className="mt-2 flex gap-4">
        <span>Pending: {statusCounts.Pending}</span>
        <span>In Progress: {statusCounts['In Progress']}</span>
        <span>Completed: {statusCounts.Completed}</span>
      </div>
    </div>
  );
}