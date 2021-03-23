import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BookSvg } from '../assets/svg/book.svg';
import { ReactComponent as HomeSvg } from '../assets/svg/home.svg';
import { ReactComponent as GameSvg } from '../assets/svg/games.svg';
import { ReactComponent as SeatingSvg } from '../assets/svg/seating.svg';

export const SmartMenu: React.FC = () => {
  return (
    <>
      <div className="smart-menu">
        <div className="smart-menu-body">
          <Link to="/">
            <div className="svg-wrapper" style={{ backgroundColor: '#5AAEFA' }}>
              <HomeSvg />
            </div>
          </Link>
          <Link to="/dictionary">
            <div className="svg-wrapper" style={{ backgroundColor: '#E07BD0' }}>
              <BookSvg />
            </div>
          </Link>
          <Link to="/games">
            <div className="svg-wrapper" style={{ backgroundColor: '#92BBE0' }}>
              <GameSvg />
            </div>
          </Link>
          <Link to="/games">
            <div className="svg-wrapper" style={{ backgroundColor: '#BFA57B' }}>
              <GameSvg />
            </div>
          </Link>
          <Link to="/games">
            <div className="svg-wrapper" style={{ backgroundColor: '#9CE087' }}>
              <GameSvg />
            </div>
          </Link>
        </div>
        <div className="smart-menu-footer">
          <Link to="/games">
            <div className="svg-wrapper" style={{ backgroundColor: '#9B88A3' }}>
              <SeatingSvg />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
