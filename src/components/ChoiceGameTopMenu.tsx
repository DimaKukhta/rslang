import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as AudioCallSvg } from '../assets/svg/audiocall.svg';
import { ReactComponent as SprintSvg } from '../assets/svg/sprint.svg';
import { ReactComponent as GameSvg } from '../assets/svg/games.svg';
interface IProps {
  pathWords: string;
}

export const ChoiceGameTopMenu: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="small-menu-games">
      <Link to={`/audiocall?path=${props.pathWords}`}>
        <div className="svg-wrapper" style={{ backgroundColor: '#BFA57B' }}>
          <AudioCallSvg />
        </div>
      </Link>
      <Link to={`/sprint?path=${props.pathWords}`}>
        <div className="svg-wrapper" style={{ backgroundColor: '#92BBE0' }}>
          <SprintSvg />
        </div>
      </Link>
      <Link to="/games">
        <div className="svg-wrapper" style={{ backgroundColor: '#9CE087' }}>
          <GameSvg />
        </div>
      </Link>
      <Link to="/games">
        <div className="svg-wrapper" style={{ backgroundColor: '#9CE087' }}>
          <GameSvg />
        </div>
      </Link>
    </div>
  );
};
