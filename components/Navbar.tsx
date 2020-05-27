import React from 'react';
import Router from 'next/router';
import { StarWars } from '../public/svgs';
import { auth } from '../firebaseApp';

// Log in bar may need to be contextual. Maybe pass in log in behavior?

/* 3 possible states. 
  1. Not logged in : button should do log in flow
  2. logged in on home screen -> my characters
  3. logged in on account screen -> log out?
*/
enum pages {
  'home' = 'home',
  'account' = 'account',
}

interface NavProps {
  currentPage: pages;
  isLoggedIn: boolean;
}

export default function Navbar({ currentPage, isLoggedIn }: NavProps) {
  const login = () => {
    Router.push('/login');
  };

  const loggedInRedirect = () => {
    if (currentPage === pages.home) {
      Router.push('/account');
    } else {
      auth.signOut();
      Router.push('/');
    }
  };

  let buttonText = '';

  if (isLoggedIn) {
    buttonText = currentPage === pages.home ? 'My Characters' : 'log out';
  } else {
    buttonText = 'log in';
  }

  return (
    <nav className='py-2 px-4 shadow-md'>
      <div className='mx-auto flex max-w-screen-xl'>
        <div className='flex items-center'>
          <StarWars width='50' height='50' />
          <h2 className='font-bold pl-2 text-gray-800'>Role Playing Game</h2>
        </div>

        <button
          onClick={isLoggedIn ? login : loggedInRedirect}
          className='ml-auto border border-blue-800 shadow rounded-full px-6 py-2 text-blue-800 hover:bg-blue-800 hover:border-blue-800 hover:text-white transform hover:-translate-y-px active:bg-blue-900 active:border-blue-900 active:translate-y-px'
        >
          {buttonText}
        </button>
      </div>
    </nav>
  );
}
