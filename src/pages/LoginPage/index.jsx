import Button from './components/Button';

const LoginPage = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center'>
      <div className='w-1/3 shadow-2xl rounded-sm p-5'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-green-950'>LOGIN</h1>
          <p className='text-sm text-green-900'>
            Welcome! please enter your account
          </p>
        </div>
        <form action={''} className='pt-2 space-y-3'>
          <Input />
          <label
            htmlFor='password'
            className='font-bold text-lg text-green-900'
          >
            Password
          </label>
          <input
            type='text'
            name='password'
            id='password'
            className='border-1 w-full rounded-sm p-1 border-gray-400 focus:border-1 outline-green-900'
          />
          <Button className={'bg-green-900 text-white w-full'}>SUBMIT</Button>
          <p className='text-base text-center'>
            Don't have an account?{' '}
            <a href='' className='font-bold text-green-900'>
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
