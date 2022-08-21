import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/">
      <p className="font-[wintersoul] text-4xl p-1">
        Pure
        <span className="font-[valkyrie] text-primary-100">Hands</span>
      </p>
    </Link>
  );
}
