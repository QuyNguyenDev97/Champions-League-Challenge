import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { headerNavItems } from '../../../consts';
import { HeaderStyled } from './styled';
import { makeScollToId } from '../../../helper';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const logoRef = useRef(null);
  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HeaderStyled>
      <header className="fixed z-50 top-0 left-0 w-full bg-gray-900 text-white px-8 h-16 flex justify-center  md:justify-between items-center">
        <button
          className="text-lg   font-bold focus:outline-none"
          onClick={handleLogoClick}
          ref={logoRef}
        >
          Champions League Challenge
        </button>
        <div className=" h-full items-center hidden md:flex">
          <a
            href={makeScollToId(headerNavItems.player.id)}
            className="block text-center uppercase w-32 hover:text-gray-400 hover:text-lg font-semibold"
          >
            {headerNavItems.player.name}
          </a>
          <a
            href={makeScollToId(headerNavItems.table.id)}
            className="block text-center uppercase w-32 hover:text-gray-400 hover:text-lg font-semibold"
          >
            {headerNavItems.table.name}
          </a>
          <a
            href={makeScollToId(headerNavItems.filterTable.id)}
            className="block text-center uppercase w-32 hover:text-gray-400 hover:text-lg font-semibold"
          >
            {headerNavItems.filterTable.name}
          </a>
        </div>
      </header>
      <div className="h-16"></div>
    </HeaderStyled>
  );
};

export default Header;
