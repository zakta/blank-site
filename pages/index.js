import ContainerCenter from '@/components/ContainerCenter/styles';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ContainerCenter>
        <h2>Home</h2>
      </ContainerCenter>
      <GoogleAnalytics />
    </div>
  );
}
