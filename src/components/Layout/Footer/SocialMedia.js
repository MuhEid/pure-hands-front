import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const icons = [
  <FaFacebookF size={18} />,
  <FaInstagram size={18} />,
  <FaTwitter size={18} />,
  <FaYoutube size={18} />,
];
export default function SocialMedia() {
  return (
    <div className="flex justify-center lg:justify-start text-primary-200 mt-10">
      {icons.map((icon) => (
        <button className="mr-6">{icon}</button>
      ))}
    </div>
  );
}
