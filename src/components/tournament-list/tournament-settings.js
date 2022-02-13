import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchTournamentSettings } from '../data-service/data-service';
import { getFormatedDate } from '../utils/utils';

const Tournament = ({tournament}) => {
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchTournamentSettings(`${id}`));
  }, [ ]);

  return (
    <div className='container'>
    <div className='card card-decoration'>
      <img className='tournaments-img mx-auto' src={tournament.streamly_logo} width="300" height="150" alt='tournament logo'/>
      <div className='card-body'>
        <h5 className='card-title text-center fs-2'>
          {tournament.name}
        </h5>
        <p className='card-text'>
          Status: {tournament.status}
        </p>
        <p className='card-text'>
          Start date: {getFormatedDate(tournament.live_start_at)}
        </p>
        <p className='card-text'>
          End date: {getFormatedDate(tournament.live_end_at)}
        </p>
      </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tournament: state.tournaments.tournament,
  }
};

export default connect(mapStateToProps)(Tournament);