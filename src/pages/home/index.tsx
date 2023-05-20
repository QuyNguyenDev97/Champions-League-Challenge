import classNames from 'classnames';
import React from 'react';
import { haaland, headerNavItems, playerArray } from '../../consts';
import CardHeader from './card-header';
import FilterTable from './filter-table';
import PlayerCard from './player-card';
import PlayerTable from './player-table';
import { HomePageStyled } from './styled';

interface HomePageProps {
  className: string;
}

const HomePage: React.FC<HomePageProps> = ({ className }) => {
  return (
    <HomePageStyled className={classNames('container pb-16', className)}>
      <CardHeader id={headerNavItems.player.id}>Player Card</CardHeader>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <PlayerCard player={haaland} />
      </div>
      <CardHeader id={headerNavItems.table.id}>Player Table</CardHeader>
      <PlayerTable playerArray={playerArray} />
      <CardHeader id={headerNavItems.filterTable.id}>
        Filtered Player Table
      </CardHeader>
      <FilterTable playerArray={playerArray} />
    </HomePageStyled>
  );
};

export default HomePage;
