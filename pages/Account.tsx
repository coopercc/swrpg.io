import React from 'react';
import { auth } from '../firebaseApp';
import Router from 'next/router';

function Account() {
  return <div>Account</div>;
}

// TODO: see if there's a way to not have to wait for client side to render this, would be disappointing
// auth.currentUser may not exist yet
export async function getServerSideProps() {
  if (auth.currentUser) {
    Router.replace('/');
  }
  return { props: {} };
}

export default Account;
