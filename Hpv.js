import React, { useState } from 'react';
import ImagemHpv from './hpv.png';

const Hpv = () => {
    const [imageVisible, setImageVisible] = useState(false);
  
    const handleClick = () => {
      setImageVisible(!imageVisible);
    };
  

  return (
    <div>
      <h6 onClick={handleClick}>HPV</h6>
      {imageVisible && (
        <img
          src={ImagemHpv}
        />
      )}
    </div>
  );
};

export default Hpv;


