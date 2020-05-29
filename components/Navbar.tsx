import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { StarWars } from '../public/svgs';
import { auth } from '../firebaseApp';
import LoginModal from './LoginModal';

enum pages {
  'home' = '/',
  'account' = '/account',
}

export default function Navbar() {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const [buttonText, setButtonText] = useState('...');

  const isHome = router.pathname === pages.home;

  auth.onAuthStateChanged((user) => {
    if (user) {
      setButtonText(isHome ? 'My Characters' : 'log out');
    } else {
      setButtonText('log in');
    }
  });

  const login = () => {
    setShowLogin(true);
  };

  const loggedInRedirect = () => {
    if (isHome) {
      router.push('/account');
    } else {
      auth.signOut();
      router.push('/');
    }
  };

  return (
    <>
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
      {showLogin && <LoginModal hideModal={() => setShowLogin(false)} />}
    </>
  );
}
