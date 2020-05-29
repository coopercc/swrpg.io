import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import { auth } from '../firebaseApp';

const uiConfig = {
  // User does not require a display name
  requireDisplayName: false,
  // Redirect to /account after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/account',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

interface onClickHandler {
  (e: React.MouseEvent<HTMLElement>): void;
}

export default function LoginModal({ hideModal }: { hideModal: onClickHandler }) {
  return (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-sm'>
          {/*content*/}
          {/* We want to close on all clicks outside this div */}
          <div className='border-0 rounded shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            <div>
              <button
                className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                onClick={hideModal}
              >
                <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className='relative p-8 flex-auto'>
              <h4 className='text-xl pt-2 pb-8'>Please sign in or create an account</h4>
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black' onClick={hideModal}></div>
    </>
  );
}
