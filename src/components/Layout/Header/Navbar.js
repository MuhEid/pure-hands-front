import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { content: 'home', path: '/' },
  { content: 'shop', path: '/shop' },
  { content: 'catogries', path: '/catogries' },
  { content: 'about', path: '/about' },
  { content: 'contact', path: '/contact' },
];
export default function Navbar() {
  return (
    <ul className="mx-10 hidden lg:flex gap-x-8 flex-1 [&>*]:p-2 items-center">
      {links.map((x) => (
        <li className="flex">
          <NavLink
            to={x.path}
            className="relative group text-sm font-[google] uppercase font-bold text-primary-200 opacity-90 hover:opacity-100 transition-all duration-200"
          >
            {x.content}
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary-200 transition-all duration-500 group-hover:w-full"></span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
