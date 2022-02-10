import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchTournamentSettings } from '../data-service/data-service';

const Tournament = () => {
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchTournamentSettings(`${id}`));
  }, [ ]);

  return (
    <div className='container gap-2 col-3 mx-auto'>
      <img className='tournaments-img' src='' width="300" height="150" alt='tournament logo'/>
      <div className='card-body'>
        <h5 className='card-title'>
          {id}
        </h5>
        <p className='card-text'>
          {/* Status: {tournament.status} */}
        </p>
      </div>
    </div>
  )
}

export default Tournament;