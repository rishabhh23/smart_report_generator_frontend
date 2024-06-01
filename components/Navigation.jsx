import React from 'react';
import redcliffe from '../src/assets/redcliffe.jpeg';

function Navigation() {
  return (
    <>
        <img
            src={redcliffe}
            alt="Redcliffe Labs"
            className='navigation-image'
        />
    </>
  );
}

export default Navigation;
