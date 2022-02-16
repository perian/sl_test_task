import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMoreTournaments, fetchTournaments } from '../data-service/data-service';
import { TournamentItem } from './tournament-item';
import { createSelector } from 'reselect'
import './tournament-list.css';
import { filterByTitleAction } from '../actions/actions';
import { store } from '../store';

export const TournamentList = ({dispatch, tournaments, isOutOfData, pageNumber, searchByTitle}) => {
  
  useEffect(() => {
    dispatch(fetchTournaments());
  }, [  ]);
  
  const getMoreTournaments = () => {
    dispatch(fetchMoreTournaments(pageNumber + 1));
  }

  let filtersData = () => {
    const newArray = [...tournaments]
                    .filter(t => t.name.toLowerCase().includes(searchByTitle.toLocaleLowerCase()))

    if (searchByTitle) {
      return newArray.sort((a, b) => a.name.localeCompare(b.name))
    }

    return newArray
  }

  let filteredData = filtersData();

  let items = filteredData.map(tournament => 
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

  return (
    <section className='container'>
      {tournaments.length
        ?
        <React.Fragment>
          Search: <input 
            className='form-control mb-3'
            type='text' 
            value={searchByTitle}
            onChange={
              (evt)=>{dispatch(filterByTitleAction(evt.target.value))}
            }
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
    searchByTitle: state.tournaments.searchByTitle,
  };
};

export default connect(mapStateToProps)(TournamentList);