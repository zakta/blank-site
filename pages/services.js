import Head from 'next/head';
import Header from '@/components/Header';
import ContainerCenter from '@/components/ContainerCenter/styles';
import Footer from '@/components/Footer';

export default function Services() {
  return (
    <>
      <Head>
        <title>Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ContainerCenter>
        <h2>Services</h2>
      </ContainerCenter>
      <Footer />
    </>
  );
}
