// 3rd parties
import Head from 'next/head';
// Components
import Header from '@/components/Header';
import ContainerCenter from '@/components/ContainerCenter/styles';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function Services() {
  return (
    <>
      <Head>
        <title>Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ContainerCenter>
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            Home
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            Services
          </Breadcrumb.Item>
        </Breadcrumb>
        <h2>Services</h2>
      </ContainerCenter>
      <Footer />
    </>
  );
}
