import React from 'react';
import SearchBar from '../../UI/SearchBar';
import { BsCart4, BsPerson } from 'react-icons/bs';

export default function UserArea() {
  return (
    <div className="flex items-center justify-center gap-x-2 lg:gap-x-7 mx-5">
      <div className="hidden lg:block">
        <SearchBar />
      </div>
      <button className="border rounded-full border-primary-200 p-1.5 border-opacity-70">
        <BsPerson size={25} color="#44533c" />
      </button>

      <button className="flex relative flex-col">
        <div className="bg-primary-200 absolute w-3/4 h-3/4 rounded-full -right-2 -top-2 text-white text-[12px] flex items-center justify-center">
          0
        </div>
        <BsCart4 size={26} color="#44533c" />
      </button>
    </div>
  );
}
