import React from 'react';
import { BiSearch } from 'react-icons/bi';

export default function SearchBar() {
  return (
    <form action="" className="flex border-b-[1px] border-primary-200">
      <input
        type="text"
        className="bg-[#F1F0EC] text-sm block w-full p-2 placeholder:text-primary-200 placeholder:opacity-80 placeholder:font-[google] focus:outline-none"
        placeholder="Search here"
      />
      <button type="submit">
        <BiSearch size={20} className="opacity-70" />
      </button>
    </form>
  );
}
