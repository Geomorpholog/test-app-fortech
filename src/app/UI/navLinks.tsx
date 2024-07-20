'use client';


import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import Home from '../assets/icons/Home.svg';
import Users from '../assets/icons/Users.svg';

export const links = [
  { name: 'Home', href: '/',icon: Home},
  { name: 'Users', href: '/users', icon: Users},
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link          
            key={link.name}
            href={link.href}
            className={clsx(" mb-[8px] flex h-[68px] text-lg text-sky-950 grow items-center justify-center gap-2  bg-sky-200 p-3 text-sm font-medium hover:bg-gray-700 hover:text-amber-100 md:flex-none md:justify-start md:p-2 md:px-3 last:mb-0",{
              'bg-slate-900 text-orange-200': pathname === link.href,
            },)}
          >
            <Image src = {link.icon} alt = "icon"
            style={{
              width: '40px',
              height: '40px',
              
            }} />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}