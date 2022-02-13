import React from 'react';
import { Link } from 'react-router-dom';
import { getFormatedDate } from '../utils/utils';
import './tournament-item.css';

export const TournamentItem = (props) => {
  const {tournament} = props;

  return (
    <li className='card card-decoration' 
        key={tournament.id}>
      <Link className='card-img-top' to={`/tournament/${tournament.id}`}>
        <img className='tournaments-img' src={tournament.streamly_logo} width="300" height="150" alt='tournament logo'/>
      </Link>
      <div className='card-body'>
        <h5 className='card-title'>
          <Link className='card-title-link' to={`/tournament/${tournament.id}`}>
            {tournament.name}
          </Link>
        </h5>
        <p className='card-text'>Start date: {getFormatedDate(tournament.live_start_at)}</p>
        <p className='card-text'>
          Status: {tournament.status}
        </p>
      </div>
    </li>
  )
}
