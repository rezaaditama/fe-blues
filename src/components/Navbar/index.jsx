import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';

const Navbar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const HandleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    navigate('/');
  };
  return (
    <nav className='w-full shadow-xl bg-green-950 px-6 py-3 flex items-center justify-between'>
      <div className='flex flex-row items-center space-x-2'>
        <img src='/public/assets/img/logo-1.png' alt='' className='w-24' />
        <h1 className='font-bold text-gray-200 text-xl'>Darzayed Villa</h1>
      </div>
      <div className='font-bold text-white space-x-2 w-1/4 flex justify-evenly text-lg'>
        <Link to={'/'}>Home</Link>
        <Link>Product</Link>
        <Link>Contact</Link>
        <Link>About</Link>
      </div>
      {localStorage.getItem('username') && localStorage.getItem('password') && (
        <div className='flex space-x-2 items-center'>
          <h1 className='font-bold text-white text-lg'>{username}</h1>
          <Button
            onClick={HandleLogout}
            className={'bg-yellow-500 text-white py-1 px-1'}
          >
            Logout
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
