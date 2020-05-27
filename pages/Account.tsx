import React from 'react';
import { auth } from '../firebaseApp';
import Router from 'next/router';

function Account() {
  return <div>Account</div>;
}

export async function getServerSideProps() {
  if (auth.currentUser) {
    Router.replace('/login');
  }
}

export default Account;
