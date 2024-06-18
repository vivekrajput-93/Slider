import React from 'react';
import data from './data';
import ImageSlider from './ImageSlider';

const App = () => {
  return (
    <div className='container'>
      <ImageSlider images={data} />
    </div>
  );
};

export default App;