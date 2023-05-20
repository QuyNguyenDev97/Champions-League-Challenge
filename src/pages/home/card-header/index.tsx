import classNames from 'classnames';
import React from 'react';
import { CardHeaderStyled } from './styled';

interface CardHeaderProps {
  className?: string;
  children: string;
  id?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ className, children, id }) => {
  return (
    <CardHeaderStyled
      id={id}
      className={classNames(
        'text-3xl font-semibold my-8 pb-2 border-b-2 inline-block',
        className,
      )}
    >
      {children}
    </CardHeaderStyled>
  );
};

export default CardHeader;
