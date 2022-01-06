// 3rd parties
import Modal from '@/components/Modal';
import { Btn } from '@/components/Modal/styles';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [activeModal, setActiveModal] = useState(false);
  return (
    <div>
      <Head>
        <title>Modal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Btn type="button" onClick={() => setActiveModal(true)}>Abrir</Btn>

      <Modal activeModal={activeModal} setActiveModal={setActiveModal} />
    </div>
  );
}
