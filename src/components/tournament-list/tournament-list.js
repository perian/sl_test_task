import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTournaments } from '../data-service/data-service';
import { TournamentItem } from './tournament-item';
import { createSelector } from 'reselect'
import './tournament-list.css';
import { getFilteredTournamentsAction, getMoreTournamentsAction } from '../actions/actions';

export const TournamentList = () => {
    const dispatch = useDispatch()
    const state  = useSelector(state => state)
    const tournaments = useSelector(state => state.tournaments.all)
    const isOutOfData = useSelector(state => state.tournaments.isOutOfData)
    let pageNumber = useSelector(state => state.tournaments.pageNumber)
    const filteredTournaments = useSelector(state => state.tournaments.filteredTournaments)
    const searchTitle = useSelector(state => state.tournaments.searchTitle)

  useEffect(() => {
    dispatch(fetchTournaments(pageNumber));
  }, [ pageNumber ]);
  
  const getMoreTournaments = () => {
    dispatch(getMoreTournamentsAction(++pageNumber));
  }

  const filteredSelector = createSelector(
    state => state.tournaments.all,
    (all) => all.filter(t => t.name.toLowerCase().includes(searchTitle.toLocaleLowerCase())).sort((a, b) => a -b))
    
  console.log('render', pageNumber, `state: `, state.tournaments.all.length);
  const filteredData = filteredSelector(state)
  let data;
  filteredData.length && searchTitle ? data = filteredTournaments : data = tournaments

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

export default TournamentList;