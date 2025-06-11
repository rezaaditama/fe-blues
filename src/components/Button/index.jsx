const Button = ({ children, className, type, onClick }) => {
  return (
    <button
      className={`${className} font-bold px-2 py-1.5 rounded-md cursor-pointer`}
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
