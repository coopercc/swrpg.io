import Head from 'next/head';
import styles from './index.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SWRPG Character Sheet</title>
        <link rel='icon' href='/svgs/star-wars.svg' />
      </Head>

      <main className='w-full'>
        <div id={styles.hero} className='flex items-center justify-center text-center'>
          <div>
            <h1 className='text-white text-5xl font-bold flex-row'>Welcome to SWRPG.IO!</h1>
            <h3 className='text-white text-2xl'>
              An online character sheet built specifically for the Star Wars roleplaying game
            </h3>
          </div>
        </div>
      </main>

      {/* TODO: footer for help, maybe a small form? */}
      <footer></footer>
    </div>
  );
}
