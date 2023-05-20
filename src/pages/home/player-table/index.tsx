import classNames from 'classnames';
import React from 'react';
import { Player } from '../../../models/Player.Model';
import PlayerCard from '../player-card';
import { PlayerTableStyled } from './styled';

interface PlayerTableProps {
  playerArray: Player[];
  className?: string;
}

const PlayerTable: React.FC<PlayerTableProps> = React.memo(
  ({ playerArray, className }) => {
    return (
      <PlayerTableStyled
        className={classNames(
          'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6',
          className,
        )}
      >
        {playerArray.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </PlayerTableStyled>
    );
  },
);

PlayerTable.displayName = 'PlayerTable';

export default PlayerTable;
