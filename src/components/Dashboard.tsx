import { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import { TaskForm } from './TaskForm';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { DashboardHeader } from './DashboardHeader';
import { FilterButtons } from './FilterButtons';
import { NoTasksCard } from './NoTasksCard';
import { TaskList } from './TaskList';
import { Task } from '../types/task';

export function Dashboard() {
  const { tasks, addTask, updateTask } = useTasks();
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filter, setFilter] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc'); // New state for sort order

  const filteredTasks = tasks
    .filter(task => filter === 'All' || task.status === filter)
    .sort((a, b) => {
      const dateA = new Date(a.dueDate).getTime();
      const dateB = new Date(b.dueDate).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

  return (
    <div className="container mx-auto p-4">
      <DashboardHeader tasks={tasks} />
      
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-4">
          <FilterButtons filter={filter} setFilter={setFilter} />
          <Button
            variant="outline"
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          >
            Sort by Due Date {sortOrder === 'asc' ? '↑' : '↓'}
          </Button>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>Add Task</Button>
          </DialogTrigger>
          <DialogContent>
            <TaskForm
              task={editingTask || undefined}
              onSubmit={task => {
                if ('id' in task) updateTask(task.id, task);
                else addTask(task);
              }}
              onClose={() => {
                setEditingTask(null);
                setIsDialogOpen(false);
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      {filteredTasks.length === 0 ? (
        <NoTasksCard 
          filter={filter} 
          onAddClick={() => setIsDialogOpen(true)}
        />
      ) : (
        <TaskList 
          tasks={filteredTasks}
          onEdit={task => {
            setEditingTask(task);
            setIsDialogOpen(true);
          }}
        />
      )}
    </div>
  );
}