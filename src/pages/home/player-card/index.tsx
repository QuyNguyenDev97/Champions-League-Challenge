import React from 'react';
import { Link } from 'react-router-dom';
import { makeLinkSearchWiki } from '../../../helper';
import { Player } from '../../../models/Player.Model';
import { PlayerCardStyled } from './styled';

interface PlayerCardProps {
  player: Player;
  classNames?: string;
}

const PlayerCard: React.FC<PlayerCardProps> = React.memo(
  function PlayerCardComponent({ player, classNames }) {
    return (
      <PlayerCardStyled className={classNames}>
        <Link
          to={makeLinkSearchWiki(player.name)}
          className="block w-full h-full p-4 mx-auto overflow-hidden transition-transform duration-300 bg-white rounded shadow-lg cursor-pointer player-card hover:scale-110"
        >
          <img
            className="object-cover w-full rounded aspect-square"
            src={player.image}
            alt={player.name}
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">{player.name}</div>
            <p className="text-base text-gray-700">
              Position: {player.positions.join(', ')}
            </p>
            <p className="text-base text-gray-700">Team: {player.team}</p>
          </div>
        </Link>
      </PlayerCardStyled>
    );
  },
);

PlayerCard.displayName = 'PlayerCard';

export default PlayerCard;
