const variants = {
  primary: 'bg-red-400',
  secondary: 'bg-yellow-500',
};

export default function Button({ variant, children, className }) {
  return <button className={`${variants[variant]} ${className}`}>{children}</button>;
}
