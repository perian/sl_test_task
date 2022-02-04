import React from 'react';
import { useSelector} from 'react-redux';
import './tournament-item.css';

const Months = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December',
}

const getFormatedDate = (date) => {
  const year = date.slice(0, 4);
  const month = Months[date.slice(5, 7)];
  const day = date.slice(8, 10);

  return `${day} ${month}, ${year}`;
}

export const TournamentItem = () => {
  const tournaments = useSelector(state => state.tournaments.tournaments);

  return (
    <React.Fragment>
      {tournaments.map(tournament => 
        <li className='card card-decoration' 
          key={tournament.id}>
          <a className='card-img-top' href='#'>
            <img className='tournament-img' src={tournament.streamly_logo} width="300" height="150" alt='tournament logo'/>
          </a>
        <div className='card-body'>
          <h5 className='card-title'>
            <a className='card-title-link' href='#'>{tournament.name}</a>
          </h5>
          <p className='card-text'>Start date: {getFormatedDate(tournament.live_start_at)}</p>
          <p className='card-text'>
            Status: {tournament.status}
          </p>
        </div>
      </li>
      )}
    </React.Fragment>
  )
} 