// Components
import Breadcrumb from '@/components/Breadcrumb';
import ContainerCenter from '@/components/ContainerCenter/styles';
import Footer from '@/components/Footer';
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
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            Home
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            About
          </Breadcrumb.Item>
        </Breadcrumb>
        <h2>About</h2>
      </ContainerCenter>
      <Footer />
    </>
  );
}
