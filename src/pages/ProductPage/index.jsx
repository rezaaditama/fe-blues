import CardProduct from '../../components/CardProduct';
import Navbar from '../../components/Navbar';
import VillaData from '../../data/Villas';

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full p-4 grid grid-cols-4 gap-4'>
        {VillaData.map((villa) => {
          return (
            <CardProduct className={'w-full'} key={villa.id}>
              <CardProduct.Header
                className={'h-52'}
                path={villa?.image_url}
                name={villa?.name}
              />
              <CardProduct.Body
                detail={villa?.facilities}
                price={villa?.price}
              />
              <CardProduct.Footer
                HandleBooking={() => console.log(villa.id)}
                HandleCheckout={() => console.log('checkout clicked')}
              />
            </CardProduct>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
