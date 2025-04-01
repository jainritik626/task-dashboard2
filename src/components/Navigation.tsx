import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="p-4 bg-gray-100 flex justify-center gap-6">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `text-lg ${isActive ? 'font-bold text-blue-600' : 'text-gray-600'}`
        }
      >
        All Tasks
      </NavLink>
      <NavLink 
        to="/completed" 
        className={({ isActive }) => 
          `text-lg ${isActive ? 'font-bold text-blue-600' : 'text-gray-600'}`
        }
      >
        Completed Tasks
      </NavLink>
    </nav>
  );
}