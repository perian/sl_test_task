import React from 'react';
import { connect, useDispatch, useSelector} from 'react-redux';
import { fetchTournaments } from '../data-service/data-service'
import { useEffect, useState } from 'react';
import { TournamentItem } from "./tournament-item";
import './tournament-list.css';

export const TournamentList = ({tournaments, isOutOfData, pageNumber}) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(fetchTournaments(`&page=1`, tournaments))
    }, [ ]);
    
  const getMoreTournaments = () => {
    dispatch(fetchTournaments(`&page=${pageNumber}`, tournaments));
    console.log(pageNumber);
  }

  const items = tournaments.map(tournament => 
    <TournamentItem 
      tournament={tournament} 
      key={tournament.id}/>
  )
  
  const button = 
    <div className='text-center col-3 mx-auto'>
      <button className='btn btn-primary mb-3' 
              onClick={() => getMoreTournaments()} disabled={isOutOfData}>
              Need MORE tournaments!
      </button>
    </div>

  return (
    <section className="container">
      {tournaments.length
        ?
        <React.Fragment>
          <ul className="tournaments-list">
            {items}
          </ul>
          {button}
        </React.Fragment>
        :
        <div>Турниры отсутствуют{button}</div>
      }
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments.all,
    isOutOfData: state.tournaments.isOutOfData,
    pageNumber: state.tournaments.pageNumber
  };
};

export default connect(mapStateToProps)(TournamentList);