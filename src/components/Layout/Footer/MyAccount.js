import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '../../UI/Typography';

const links = [
  { content: <Typography component="h6">login</Typography>, path: '/about' },
  { content: <Typography component="h6">delivery and returns</Typography>, path: '/returns' },
  { content: <Typography component="h6">blog</Typography>, path: '/blog' },
  { content: <Typography component="h6">faqs</Typography>, path: '/faq' },
];
export default function MyAccount() {
  return (
    <div className="text-center lg:text-left">
      <Typography component="h4">my account</Typography>
      <div className="flex flex-col gap-y-4 mt-5 ">
        {links.map((link) => (
          <Link to={link.path} className="hover:underline hover:font-medium">
            {link.content}
          </Link>
        ))}
      </div>
    </div>
  );
}
