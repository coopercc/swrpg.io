import React from 'react';
import { useRouter } from 'next/router';
import { StarWars } from '../public/svgs';
import { auth } from '../firebaseApp';

// Log in bar may need to be contextual. Maybe pass in log in behavior?

/* 3 possible states. 
  1. Not logged in : button should do log in flow
  2. logged in on home screen -> my characters
  3. logged in on account screen -> log out?
*/

enum pages {
  'home' = '/',
  'account' = '/account',
}

export default function Navbar() {
  const router = useRouter();
  console.log(auth.currentUser);
  const isHome = router.pathname === pages.home;

  const login = () => {
    console.log('LOGIN');
    router.push('/login');
  };

  const loggedInRedirect = () => {
    if (isHome) {
      router.push('/account');
    } else {
      auth.signOut();
      router.push('/');
    }
  };

  let buttonText = '';

  if (auth.currentUser) {
    buttonText = isHome ? 'My Characters' : 'log out';
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
          onClick={auth.currentUser ? loggedInRedirect : login}
          className='ml-auto border border-blue-800 shadow rounded-full px-6 py-2 text-blue-800 hover:bg-blue-800 hover:border-blue-800 hover:text-white transform hover:-translate-y-px active:bg-blue-900 active:border-blue-900 active:translate-y-px'
        >
          {buttonText}
        </button>
      </div>
    </nav>
  );
}
