const Input = ({ label, id, name, type, placeholder }) => {
  return (
    <>
      <label htmlFor={id} className='font-bold text-lg text-green-900'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className='border-1 w-full rounded-sm px-1 py-2 border-gray-400 focus:border-1 outline-green-900'
      />
    </>
  );
};

export default Input;
