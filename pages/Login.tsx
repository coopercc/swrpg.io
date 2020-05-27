import React from 'react';
import { auth } from '../firebaseApp';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Router from 'next/router';
import firebase from 'firebase';
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /account after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/account',
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function Login() {
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
}

export async function getServerSideProps() {
  if (auth.currentUser) {
    Router.replace('/account');
  }
}

export default Login;
