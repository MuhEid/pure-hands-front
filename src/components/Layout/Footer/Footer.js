import React from 'react';
import Logo from '../../UI/Logo';
import FooterContact from './FooterContact';
import Information from './Information';
import MyAccount from './MyAccount';
import SocialMedia from './SocialMedia';

export default function Footer() {
  return (
    <div className="bg-background-100 p-1 flex flex-col">
      <div className="w-4/6 box-content self-center grid gap-4 sm:grid-cols-2 lg:grid-cols-4 p-3 md:p-12 xl:p-[110px]">
        <div className="">
          <Logo />
          <SocialMedia />
        </div>

        <Information />
        <MyAccount />
        <FooterContact />
      </div>

      <hr className="border-primary-100 w-4/6 self-center" />
      <p className="self-center pt-1 text-center font-[canela] font-medium text-primary-200">
        Copyright &#169; 2022, Pure Hands Powered By Muhammed Eid
      </p>
    </div>
  );
}
