import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '../../UI/Typography';

const links = [
  { content: <Typography component="h6">About us</Typography>, path: '/about' },
  { content: <Typography component="h6">shop</Typography>, path: '/shop' },
  { content: <Typography component="h6">Featured</Typography>, path: '/featured' },
  { content: <Typography component="h6">Join us</Typography>, path: '/register' },
];
export default function Information() {
  return (
    <div className="text-center lg:text-left">
      <Typography component="h4">Information</Typography>
      <div className="flex flex-col gap-y-4 mt-5">
        {links.map((link) => (
          <Link to={link.path} className="hover:underline hover:font-medium">
            {link.content}
          </Link>
        ))}
      </div>
    </div>
  );
}
