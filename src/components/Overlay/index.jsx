const Overlay = ({ src }) => {
  return (
    <div className='min-h-screen fixed inset-0 z-0'>
      <img
        src={src || '../public//assets/img/hero-1.jpeg'}
        alt='Villa Seruni'
        className='w-full h-full object-cover'
      />
      <div className='absolute inset-0 bg-black/70'></div>
    </div>
  );
};

export default Overlay;
