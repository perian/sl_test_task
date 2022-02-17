import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTournaments } from '../data-service/data-service';
import { filterByTitleAction } from '../actions/actions';
import Items from './tournament-items';
import GetMoreButton from './get-more-button';
import './tournament-list.css';

export const TournamentList = ({dispatch, tournaments, searchByTitle, filterByTitle, getTournaments}) => {

  useEffect(() => {
    if (!tournaments.length) {
      getTournaments();
    }
  }, [  ]);

  console.log('render');

  return (
    <section className='container'>
      {tournaments.length
        ?
        <React.Fragment>
          <input 
            className='form-control mb-3'
            type='text' 
            value={searchByTitle}
            onChange={
              (evt)=>{filterByTitle(evt.target.value)}
            }
            placeholer='Search'
          />
          <ul className='tournaments-list'>
            <Items/>
          </ul>
          <GetMoreButton/>
        </React.Fragment>
        :
        <div className='text-center fs-2'>Загружаем турниры</div>
      }
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments.all,
    searchByTitle: state.tournaments.searchByTitle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTournaments: () => dispatch(fetchTournaments()),
    filterByTitle: (title) => dispatch(filterByTitleAction(title)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TournamentList);