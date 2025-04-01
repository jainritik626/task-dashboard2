import { Button } from './ui/button';

interface FilterButtonsProps {
  filter: string;
  setFilter: (filter: string) => void;
}

export function FilterButtons({ filter, setFilter }: FilterButtonsProps) {
  return (
    <div className="space-x-2">
      <Button
        variant={filter === 'All' ? 'default' : 'outline'}
        onClick={() => setFilter('All')}
      >
        All
      </Button>
      <Button
        variant={filter === 'Pending' ? 'default' : 'outline'}
        onClick={() => setFilter('Pending')}
      >
        Pending
      </Button>
      <Button
        variant={filter === 'In Progress' ? 'default' : 'outline'}
        onClick={() => setFilter('In Progress')}
      >
        In Progress
      </Button>
      <Button
        variant={filter === 'Completed' ? 'default' : 'outline'}
        onClick={() => setFilter('Completed')}
      >
        Completed
      </Button>
    </div>
  );
}