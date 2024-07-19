'use client';
import NavLinks from './navLinks'
import Image from 'next/image'
import logo from '../assets/images/Logo.png'

export default function Header() {

  return (
    <div className="w-full bg-sky-300 border-8 border-sky-300">
      <Image src={logo} alt="some logo" sizes="100vw"

        style={{
          width: '75%',
          height: 'auto',
          margin: '25px auto'
        }} />
      <NavLinks />
    </div>
  )
}