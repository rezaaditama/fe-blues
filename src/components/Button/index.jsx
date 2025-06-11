const Button = ({ children, className, type, onClick }) => {
  return (
    <button
      className={`font-bold px-2 py-1 rounded-md cursor-pointer ${className}`}
      type={type || 'submit'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
