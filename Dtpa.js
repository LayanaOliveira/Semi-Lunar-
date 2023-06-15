import React, { useState } from 'react';
import ImagemDtpa from './dtpa.png';

const Dtpa = () => {
    const [imageVisible, setImageVisible] = useState(false);
  
    const handleClick = () => {
      setImageVisible(!imageVisible);
    };
  

  return (
    <div>
      <h4 onClick={handleClick}>DTPA</h4>
      {imageVisible && (
        <img
          src={ImagemDtpa}
        />
      )}
    </div>
  );
};

export default Dtpa;


