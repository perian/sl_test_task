import React, { useEffect, useState } from 'react';
import { connect, useDispatch} from 'react-redux';
import { fetchMoreTournaments, fetchTournaments } from '../data-service/data-service'
import { TournamentItem } from './tournament-item';
import './tournament-list.css';

export const TournamentList = ({tournaments, isOutOfData, pageNumber}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [notUploaded, setNotUploaded] = useState(false);

  useEffect(() => {
      dispatch(fetchTournaments());
  }, [ ]);

  const getMoreTournaments = () => {
    dispatch(fetchMoreTournaments(`&page=${pageNumber}`, tournaments));
  }

  const items = tournaments.map(tournament => 
    <TournamentItem 
      tournament={tournament} 
      key={tournament.id}/>
  )

  const button = <div className='text-center col-3 mx-auto'>
                    <button className='btn btn-primary mb-3' 
                            onClick={() => getMoreTournaments() } disabled={isOutOfData}>
                            Need MORE tournaments!
                    </button>
                  </div>

  const filter = (tournaments, value) => {
    return tournaments.filter(t => t.name.toLowerCase().includes(value.toLocaleLowerCase()))
      .sort((a, b) => a - b)
  }

  const filterTournaments = (evt) => {
    
    setValue(evt.target.value)
  }
  
  return (
    <section className='container'>
      {tournaments.length
        ?
        <React.Fragment>
          Search: <input 
            className='form-control mb-3'
            type='text' 
            value={value} 
            onChange={(evt)=>filterTournaments(evt)} placeholer='Search'
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

// const state = () => {return store.getState();}
// const value = () => {return 'pmgc'}
// const selectFilter = createSelector(
//   state => state.tournaments.all, value,
//   (all,value) => all.filter(t => t.name.toLowerCase().includes(value.toLocaleLowerCase()))
//   .sort((a, b) => a - b)
// )

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments.all,
    isOutOfData: state.tournaments.isOutOfData,
    pageNumber: state.tournaments.pageNumber
  };
};

export default connect(mapStateToProps)(TournamentList);