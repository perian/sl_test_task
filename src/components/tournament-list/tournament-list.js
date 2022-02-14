import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchMoreTournaments, fetchTournaments } from '../data-service/data-service';
import { TournamentItem } from './tournament-item';
import { createSelector } from 'reselect'
import './tournament-list.css';
import { getFilteredTournamentsAction } from '../actions/actions';
import { store } from '../store';

export const TournamentList = ({dispatch, tournaments, isOutOfData, pageNumber, filteredTournaments, searchTitle}) => {
  // const dispatch = useDispatch();
  const [value, setValue] = useState('');

  useEffect(() => {
    if (!tournaments.length) {
      dispatch(fetchTournaments());
    }
  }, [ ]);
  
  const getMoreTournaments = () => {
    dispatch(fetchMoreTournaments(`&page=${pageNumber}`, tournaments));
  }

  let data;
  filteredTournaments.length && searchTitle ? data = filteredTournaments : data = tournaments

  let items = data.map(tournament => 
    <TournamentItem 
      tournament={tournament} 
      key={tournament.id}/>
  )
  
  const button = <div className='text-center col-3 mx-auto'>
                    <button className='btn btn-primary mb-3' 
                            onClick={() => getMoreTournaments()}
                            disabled={isOutOfData}>
                            Need MORE tournaments!
                    </button>
                  </div>

  console.log('searchTitle: ', searchTitle, ', filteredTournaments ', filteredTournaments.length);

  const filtered = (data, evt) => {
    return data.filter(t => t.name.toLowerCase().includes(evt.target.value.toLocaleLowerCase()))
    .sort((a, b) => `${a}`.localeCompare(b))
  } 

  return (
    <section className='container'>
      {tournaments.length
        ?
        <React.Fragment>
          Search: <input 
            className='form-control mb-3'
            type='text' 
            value={searchTitle}
            onChange={
              (evt)=>{dispatch(
                  getFilteredTournamentsAction(filtered(tournaments, evt), evt.target.value)
                )}}
            placeholer='Search'
          />
          <ul className='tournaments-list'>
            {items}
          </ul>
          {button}
        </React.Fragment>
        :
        <div className='text-center fs-2' >Загружаем турниры{button}</div>
      }
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments.all,
    isOutOfData: state.tournaments.isOutOfData,
    pageNumber: state.tournaments.pageNumber,
    filteredTournaments: state.tournaments.filteredTournaments,
    searchTitle: state.tournaments.searchTitle,
  };
};

export default connect(mapStateToProps)(TournamentList);