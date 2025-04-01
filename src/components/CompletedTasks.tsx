import { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import { TaskForm } from './TaskForm';
import { Dialog, DialogContent } from './ui/dialog';
import { NoTasksCard } from './NoTasksCard';
import { TaskList } from './TaskList';
import { Task } from '../types/task';
import { Button } from './ui/button';

export function CompletedTasks() {
  const { tasks, updateTask } = useTasks();
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc'); // Add sort order state

  const completedTasks = tasks
    .filter(task => task.status === 'Completed')
    .sort((a, b) => {
      const dateA = new Date(a.dueDate).getTime();
      const dateB = new Date(b.dueDate).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Completed Tasks</h1>
        <Button
          variant="outline"
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
        >
          Sort by Due Date {sortOrder === 'asc' ? '↑' : '↓'}
        </Button>
      </div>
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