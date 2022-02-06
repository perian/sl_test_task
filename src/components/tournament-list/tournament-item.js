import React from 'react';
import { Link } from 'react-router-dom';
import './tournament-item.css';

const Months = {
  'Jan': 'January',
  'Feb': 'February',
  'Mar': 'March',
  'Apr': 'April',
  'May': 'May',
  'Jun': 'June',
  'Jul': 'July',
  'Aug': 'August',
  'Sep': 'September',
  'Oct': 'October',
  'Nov': 'November',
  'Dec': 'December',
}

const getFormatedDate = (date) => {
  const formateDate = new Date(date).toString();

  const year = formateDate.slice(11, 15);
  const month = Months[formateDate.slice(4, 7)];
  const day = formateDate.slice(8, 10);

  return `${day} ${month}, ${year}`;
}

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