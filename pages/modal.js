// 3rd parties
import Head from 'next/head';
// components
import ModalResponsive from '@/components/ModalResponsive';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Modal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ModalResponsive />
    </div>
  );
}
