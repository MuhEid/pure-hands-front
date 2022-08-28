import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/">
      <p className="font-[wintersoul] text-center lg:text-left tracking-wide text-4xl">
        Pure
        <span className="ml-1 font-[valkyrie] text-primary-100">Hands</span>
      </p>
    </Link>
  );
}
