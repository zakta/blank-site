import GoogleAnalytics from '@/components/GoogleAnalytics';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blank Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Oi</h2>
      <GoogleAnalytics />
    </div>
  );
}
