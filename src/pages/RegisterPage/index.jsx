import { Link } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Overlay from '../../components/Overlay';

const RegisterPage = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center relative'>
      <Overlay />
      <AuthLayout className={'w-1/3'} type={'register'}>
        <form action={''} className='pt-2 space-y-3'>
          <Input
            label={'Fullname'}
            id={'fullname'}
            name={'fullname'}
            type={'text'}
            placeholder={'Enter your fullname'}
          />
          <Input
            label={'Username'}
            id={'username'}
            name={'username'}
            type={'text'}
            placeholder={'Enter your username'}
          />
          <Input
            label={'Email'}
            id={'email'}
            name={'email'}
            type={'text'}
            placeholder={'Enter your email'}
          />
          <Input
            label={'Password'}
            id={'password'}
            name={'password'}
            type={'password'}
            placeholder={'Enter your password'}
          />
          <Input
            label={'Verify Password'}
            id={'verifyPassword'}
            name={'verifyPassword'}
            type={'password'}
            placeholder={'Verify your password'}
          />

          <Button className={'bg-green-900 text-white w-full'}>SIGN UP</Button>
          <p className='text-base text-center'>
            Have an account?{' '}
            <Link to={'/'} className='font-bold text-green-900'>
              Sign In
            </Link>
          </p>
        </form>
      </AuthLayout>
    </div>
  );
};

export default RegisterPage;
