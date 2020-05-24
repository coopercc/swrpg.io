import React from 'react';
import { StarWars } from '../images/svgs';

// TODO: Will need to add auth handling

export default function Navbar() {
  return (
    <nav className='py-2 px-4 shadow-md'>
      <div className='mx-auto flex max-w-screen-xl'>
        <div className='flex items-center'>
          <StarWars width='50' height='50' />
          <h2 className='font-bold pl-2 text-gray-800'>Role Playing Game</h2>
        </div>
        <button className='ml-auto border border-blue-800 shadow rounded-full px-4 py-2 text-blue-800 hover:bg-blue-800 hover:border-blue-800 hover:text-white transform hover:-translate-y-px active:bg-blue-900 active:border-blue-900 active:translate-y-px'>
          Log in
        </button>
      </div>
    </nav>
  );
}
