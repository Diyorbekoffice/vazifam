import React from 'react';
import logo from '../assets/Rectangle.svg';
import image from '../assets/im78.svg';

const Header: React.FC = () => {
  return (
    <header className='flex justify-between items-center'>
      <div className='flex flex-col items-center gap-2'>
        <img src={logo} alt="logo" />
        <h3 className='font-semibold text-base text-center'>
          Давлат хизматининг <br /> ягона электрон ахборот-<br />таҳлил тизими
        </h3>
      </div>
      <h1 className='font-bold text-3xl text-center'>
        Республика Ассессмент маркази <br /> онлайн платформаси
      </h1>
      <img src={image} alt="image" />
    </header>
  );
};

export default Header;
