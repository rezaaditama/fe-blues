import Button from './components/Button';

const App = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <Button className={'bg-blue-800 text-white'} type={'button'}>
        Submit
      </Button>
    </div>
  );
};

export default App;
