import ContainerCenter from '@/components/ContainerCenter/styles';
import Head from 'next/head';
import Header from '../components/Header';

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ContainerCenter>
        <h2>About</h2>
      </ContainerCenter>
    </>
  );
}
