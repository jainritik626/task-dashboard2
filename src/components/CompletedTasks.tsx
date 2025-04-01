import { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import { TaskForm } from './TaskForm';
import { Dialog, DialogContent } from './ui/dialog';
import { NoTasksCard } from './NoTasksCard';
import { TaskList } from './TaskList';
import { Task } from '../types/task';

export function CompletedTasks() {
  const { tasks, updateTask } = useTasks();
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const completedTasks = tasks
    .filter(task => task.status === 'Completed')
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Completed Tasks</h1>
      {completedTasks.length === 0 ? (
        <NoTasksCard />
      ) : (
        <TaskList 
          tasks={completedTasks}
          onEdit={task => {
            setEditingTask(task);
            setIsDialogOpen(true);
          }}
        />
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <TaskForm
            task={editingTask || undefined}
            onSubmit={task => {
              if ('id' in task) updateTask(task.id, task);
            }}
            onClose={() => {
              setEditingTask(null);
              setIsDialogOpen(false);
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}