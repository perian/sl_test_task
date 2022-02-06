import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchTournamentSettings } from '../data-service/data-service';

export const Tournament = () => {
  const tournamentSettings = useSelector(state => state.tournaments.tournamentSettings);
  console.log(tournamentSettings);
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchTournamentSettings(`${id}`));
  }, []);

  return (
    <div className='container d-grid gap-2 col-3 mx-auto'>
      <p className='text-center display-3'>hey hey {id}</p>
    </div>
  )
}
