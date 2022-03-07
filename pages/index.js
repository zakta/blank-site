// 3rd parties
import { useEffect, useState } from 'react';
import Head from 'next/head';
import cookie from 'js-cookie';
// Components
import ContainerCenter from '@/components/ContainerCenter/styles';
import CookieModal from '@/components/CookieModal';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [isAcceptedCookie, setAcceptedCookie] = useState(false);

  useEffect(() => {
    if (cookie.get('allow-cookies')) {
      setAcceptedCookie(true);
    }
  }, []);
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
      <Footer />
      <GoogleAnalytics />
      <CookieModal
        isAcceptedCookie={isAcceptedCookie}
        setAcceptedCookie={setAcceptedCookie}
      />
    </div>
  );
}
