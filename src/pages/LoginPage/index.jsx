import AuthLayout from '../../components/AuthLayout';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Overlay from '../../components/Overlay';

const LoginPage = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center relative'>
      <Overlay />
      <AuthLayout className={'w-1/3'} type={'login'}>
        <form action={''} className='pt-2 space-y-3'>
          <Input
            label={'Username'}
            id={'username'}
            name={'username'}
            type={'text'}
            placeholder={'Enter your username'}
          />
          <Input
            label={'Password'}
            id={'password'}
            name={'password'}
            type={'password'}
            placeholder={'Enter your password'}
          />
          <Button className={'bg-green-900 text-white w-full'}>SUBMIT</Button>
          <p className='text-base text-center'>
            Don't have an account?{' '}
            <a href='' className='font-bold text-green-900'>
              Sign Up
            </a>
          </p>
        </form>
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
