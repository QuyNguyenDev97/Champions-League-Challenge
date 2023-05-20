import React, { useCallback, useMemo, useState } from 'react';
import Dropdown from '../../../components/dropdown';
import { playerPositionOptions } from '../../../consts';
import { Player } from '../../../models/Player.Model';
import PlayerTable from '../player-table';
import { FilterTableStyled } from './styled';

interface FilterTableProps {
  playerArray: Player[];
  className?: string;
}

const FilterTable: React.FC<FilterTableProps> = ({
  playerArray,
  className,
}) => {
  const [selectedPosition, setSelectedPosition] = useState('all');

  const handlePositionChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedPosition(event.target.value);
    },
    [],
  );

  const filteredPlayers = useMemo(() => {
    if (selectedPosition === 'all') {
      return playerArray;
    }
    const result = playerArray.filter((player) =>
      player.positions.includes(selectedPosition),
    );
    return result;
  }, [playerArray, selectedPosition]);

  return (
    <FilterTableStyled className={className}>
      <Dropdown
        onChange={handlePositionChange}
        options={playerPositionOptions}
        lableTitle="Select Position"
        value={selectedPosition}
        className="mb-8"
      />
      <PlayerTable playerArray={filteredPlayers} />
    </FilterTableStyled>
  );
};

export default FilterTable;
