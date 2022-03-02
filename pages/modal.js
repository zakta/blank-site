// 3rd parties
import Modal from '@/components/Modal';
import { Btn } from '@/components/Modal/styles';
import ModalMobile from '@/components/ModalMobile';
import Head from 'next/head';
import { useState } from 'react';
import Media from 'react-media';

export default function Home() {
  const [activeModal, setActiveModal] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Modal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Media queries={{ small: '( max-width: 599px)', medium: '(min-width: 600px)' }}>
        { (matches) => (
          <>
            {matches.small
            && (
            <>
              <Btn type="button" onClick={() => setOpen(true)}>Abrir Mobile</Btn>
              <ModalMobile activeModal={open} setActiveModal={setOpen} />
            </>
            )}
            {matches.medium
            && (
            <>
              <Btn type="button" onClick={() => setActiveModal(true)}>Abrir Desktop</Btn>
              <Modal
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                ariaHideApp={false}
              />
            </>
            )}
          </>
        )}
      </Media>
    </div>
  );
}
