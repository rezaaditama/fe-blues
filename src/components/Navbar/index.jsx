import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='w-full shadow-xl bg-green-950 px-6 py-3 flex items-center justify-between'>
      <div className='flex flex-row items-center space-x-2'>
        <img src='/public/img/logo-1.png' alt='' className='w-24' />
        <h1 className='font-bold text-gray-200 text-xl'>Darzayed Villa</h1>
      </div>
      <div className='font-bold text-white space-x-2 w-1/4 flex justify-evenly text-lg'>
        <Link to={'/'}>Home</Link>
        <Link>Product</Link>
        <Link>Contact</Link>
        <Link>About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
