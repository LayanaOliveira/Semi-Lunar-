import React, { useState } from 'react';

const Curtir = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setLikes(likes - 1);
  };

  return (
    <div>
      <button onClick={handleLike}>Curtir</button>
      <br/>
      <br/>
      <button onClick={handleDislike}>Descurtir</button>
      <br/>
      <br/>
      <p>Total de curtidas: {likes}</p>
    </div>
  );
};

export default Curtir;
