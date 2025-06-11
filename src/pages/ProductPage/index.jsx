import CardProduct from '../../components/CardProduct';
import Navbar from '../../components/Navbar';

const ProductPage = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='w-full p-2'>
        <CardProduct />
      </div>
    </div>
  );
};

export default ProductPage;
