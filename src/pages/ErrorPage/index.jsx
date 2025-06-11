import { useNavigate, useRouteError } from 'react-router-dom';
import Button from '../../components/Button';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className='min-h-screen w-full flex justify-center items-center flex-col space-y-2'>
      <h1 className='text-6xl font-bold'>Oops!</h1>
      <h2 className='font-bold text-xl'>
        {error?.status} - {error?.statusText}
      </h2>
      <p className='text-base'>
        The page you are visiting is busy right now, please try again later...
      </p>
      <Button
        className={'bg-green-900 text-white'}
        onClick={() => handleBack()}
      >
        Back to Previous Page
      </Button>
    </div>
  );
};

export default ErrorPage;
