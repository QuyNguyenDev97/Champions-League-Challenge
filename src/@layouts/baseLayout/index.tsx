import React from 'react';
import Header from './header';
import { Outlet } from 'react-router-dom';
import { BaseLayoutStyled } from './styled';

interface BaseLayoutProps {
  className: string;
}

const BaseLayOut: React.FC<BaseLayoutProps> = ({ className }) => {
  return (
    <BaseLayoutStyled className={className}>
      <Header></Header>
      <Outlet />
    </BaseLayoutStyled>
  );
};

export default BaseLayOut;
