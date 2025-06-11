import Button from '../../components/Button';

const CardProduct = () => {
  return (
    <div className='w-1/4 shadow-2xl p-3 rounded-xl space-y-2'>
      <div className='space-y-2'>
        <img
          src='/public/img/villaMelati/villaMelati-1.jpeg'
          alt=''
          className='object-cover rounded-xl'
        />
        <h1 className='text-center font-bold'>Villa Melati</h1>
      </div>
      <div className=''>
        <p className='line-clamp-4 text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          ullam harum praesentium tempora quis nisi, magnam amet animi
          distinctio reprehenderit accusamus labore iste, inventore quasi
          repudiandae.
        </p>
      </div>
      <div className='space-y-2'>
        <Button className={'bg-yellow-500 text-white w-full'}>Checkout</Button>
        <Button className={'bg-green-950 text-white w-full'}>
          Booking Now
        </Button>
      </div>
    </div>
  );
};

export default CardProduct;
