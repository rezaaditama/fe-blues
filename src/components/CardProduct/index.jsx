import Button from '../../components/Button';

const CardProduct = ({ children, className }) => {
  return <div className={`${className} shadow-2xl rounded-xl`}>{children}</div>;
};

const Header = ({ path, name, className }) => {
  return (
    <div className='space-y-2'>
      <img
        src={path}
        alt={name}
        className={`${className} rounded-t-xl w-full object-cover`}
      />
      <h1 className='text-center font-bold text-lg'>{name}</h1>
    </div>
  );
};

const Body = ({ detail, price }) => {
  return (
    <div className='space-y-2 p-2'>
      <p className='line-clamp-4 text-justify'>{detail}</p>
      <p className='text-center font-bold'>
        Rp.{' '}
        {typeof price === 'number'
          ? price.toLocaleString('id-ID')
          : 'Harga Tidak Diketahui'}
      </p>
    </div>
  );
};
const Footer = ({ HandleCheckout, HandleBooking }) => {
  return (
    <div className='space-y-2 px-2 pb-4'>
      <Button
        className={'bg-yellow-500 text-white w-full'}
        onClick={HandleCheckout}
        type={'button'}
      >
        Checkout
      </Button>
      <Button
        className={'bg-green-950 text-white w-full'}
        onClick={HandleBooking}
        type={'button'}
      >
        Booking Now
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
