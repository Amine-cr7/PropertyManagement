'use client';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '0 auto',  
};

const Spinner = ({ loading, size = 40 }) => {  
  return (
    <ClipLoader
      color='#3b82f6'
      loading={loading}
      cssOverride={override}
      size={size}
      aria-label='Loading Spinner'
    />
  );
};
export default Spinner;