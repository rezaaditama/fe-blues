import { twMerge } from 'tailwind-merge';

const Button = ({ children, className, type, onClick }) => {
  return (
    <button
      className={twMerge(
        `font-bold px-2 py-1.5 rounded-md cursor-pointer ${className}`
      )}
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
