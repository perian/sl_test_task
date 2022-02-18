import React from 'react';
import { Link } from 'react-router-dom';
import { getFormatedDate } from '../utils/utils';

export const TournamentItem = (props) => {
  const {tournament} = props;

  return (
    <li className='card bg-secondary pt-2' 
        key={tournament.id}>
      <Link className='card-img-top text-center' to={`/tournament/${tournament.id}`}>
        <img className='img-fit' src={tournament.streamly_logo} width="250" height="100" alt='tournament logo'/>
      </Link>
      <div className='card-body'>
        <h5 className='card-title'>
          <Link className='text-white text-decoration-none' to={`/tournament/${tournament.id}`}>
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
