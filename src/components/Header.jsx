import React from 'react';
import { NavLink } from 'react-router';

export default function Header() {
  return (
    <div className='flex font-mono justify-between bg-black px-20 py-3 text-white items-baseline'>
      <div>
        <h1 className='text-2xl'>Api</h1>
      </div>
      <div className='flex gap-5 text-lg'>
        <NavLink
          to={'/'}
          className={(e) => (e.isActive ? 'text-amber-500' : '')}
        >
          Meals
        </NavLink>
        <NavLink
          to={'todo'}
          className={(e) => (e.isActive ? 'text-amber-500' : '')}
        >
          Todo
        </NavLink>
      </div>
    </div>
  );
}
