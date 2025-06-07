const Button = ({ children, className, type }) => {
  return (
    <div>
      <button
        className={`font-bold px-2 py-1 rounded-md cursor-pointer ${className}`}
        type={type || 'submit'}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
