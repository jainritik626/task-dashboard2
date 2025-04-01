import { Button } from './ui/button';

interface NoTasksCardProps {
  filter?: string;
  onAddClick?: () => void;
  message?: string;
}

export function NoTasksCard({ filter, onAddClick, message }: NoTasksCardProps) {
  return (
    <div className="p-6 border rounded-lg shadow-sm bg-white text-center">
      <h3 className="font-semibold text-lg">
        {message || (filter ? 'No Tasks Found' : 'No Completed Tasks')}
      </h3>
      <p className="text-gray-600 mt-2">
        {filter === 'All'
          ? "You haven't added any tasks yet."
          : filter
          ? `There are no ${filter} tasks at the moment.`
          : 'There are no completed tasks at the moment.'}
      </p>
      {filter === 'All' && onAddClick && (
        <Button className="mt-4" onClick={onAddClick}>
          Add Your First Task
        </Button>
      )}
    </div>
  );
}