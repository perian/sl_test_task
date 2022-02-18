import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Items from './tournament-items';
import Button from './button';
import './tournament-list.css';
import { fetchTournaments } from '../../data-service/data-service';
import Input from './input';
import './tournament-list';

export const TournamentList = ({tournaments, getTournaments}) => {
  useEffect(() => {
    if (!tournaments.length) {
      getTournaments();
    }
  }, [  ]);

  return (
    <section className='container'>
      <Input/>
      {tournaments.length
        ? 
        <ul className='list-group d-grid gap-3 text-white mb-3'>
          <Items/>
        </ul>
        :
        <div className='text-center fs-3'>Загружаем турниры</div>
      }
      <Button/>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments.all,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTournaments: () => dispatch(fetchTournaments ()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TournamentList);