import { AppProps } from 'next/app';
import '../styles.css';
import Navbar from '../components/Navbar';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
export default App;
