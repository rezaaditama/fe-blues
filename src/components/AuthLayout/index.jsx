const AuthLayout = ({ children, type, className }) => {
  return (
    <div
      className={`shadow-2xl rounded-sm p-5 relative z-10 bg-gray-100 ${className}`}
    >
      {type === 'login' ? (
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-green-950'>LOGIN</h1>
          <p className='text-sm text-green-900'>
            Welcome! please enter your account
          </p>
        </div>
      ) : (
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-green-950'>REGISTER</h1>
          <p className='text-sm text-green-900'>Welcome! create your account</p>
        </div>
      )}
      {children}
    </div>
  );
};

export default AuthLayout;
