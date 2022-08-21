import React from 'react';
import Logo from '../../UI/Logo';
import Navbar from './Navbar';
import UserArea from './UserArea';
import { HiOutlineMenu } from 'react-icons/hi';

export default function Header() {
  return (
    <div className="sticky flex items-center w-full bg-[#F1F0EC] p-3">
      <button className="block lg:hidden">
        <HiOutlineMenu size={26} />
      </button>
      <div className="lg:w-[180px] w-11/12 text-center">
        <Logo />
      </div>
      <Navbar />
      <UserArea />
    </div>
  );
}
