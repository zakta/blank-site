import Link from 'next/link';
import { useState } from 'react';
import MenuMobile from '../MenuMobile';
import { Container, Item, NavBar } from './styles';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <NavBar open={open}>
        <Item onClick={() => setOpen(!open)}>
          <Link href="/">
            Home
          </Link>
        </Item>
        <Item onClick={() => setOpen(!open)}>
          <Link href="/services">
            Services
          </Link>
        </Item>
        <Item onClick={() => setOpen(!open)}>
          <Link href="/about">
            About
          </Link>
        </Item>
        <Item onClick={() => setOpen(!open)}>
          <Link href="/contact">
            Contact
          </Link>
        </Item>
      </NavBar>
      <MenuMobile open={open} setOpen={setOpen} />
    </Container>
  );
}
