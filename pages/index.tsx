import Head from 'next/head';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>SWRPG Character Sheet</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div>
          <h1>Welcome to SWRPG.IO!</h1>
          <h3>An online character sheet</h3>
        </div>
      </main>

      {/* TODO: footer for help, maybe a small form? */}
      <footer></footer>
    </div>
  );
}
