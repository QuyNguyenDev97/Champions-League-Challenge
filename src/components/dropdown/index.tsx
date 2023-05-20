import React from 'react';
import { DropdownStyled } from './styled';
import classNames from 'classnames';

interface DropDownProps {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  lableTitle: string;
  options: Option[];
  className?: string;
}

type Option = {
  value: string;
  title: string;
};

const Dropdown: React.FC<DropDownProps> = ({
  value,
  onChange,
  lableTitle,
  options,
  className,
}) => {
  return (
    <DropdownStyled className={classNames('mb-4 flex items-center', className)}>
      <label htmlFor="position" className="mr-2">
        {lableTitle}:
      </label>
      <select
        id="position"
        value={value}
        onChange={onChange}
        className="px-4 py-1 border rounded focus:outline-none"
      >
        {options.length > 0 &&
          options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.title}
            </option>
          ))}
      </select>
    </DropdownStyled>
  );
};

export default Dropdown;
