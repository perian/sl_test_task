import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { fetchTournaments } from '../data-service/data-service'
import { useEffect, useState } from 'react';
import { TournamentItem } from "./tournament-item"
import './tournament-list.css';

export const TournamentList = () => {
  const dispatch = useDispatch();
  const tournaments = useSelector(state => state.tournaments.all);
  const isOutOfData = useSelector(state => state.tournaments.dataLimit);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    dispatch(fetchTournaments(`&page=1`,tournaments));
    setPageCount(pageCount + 1);
  }, []);

  const getMoreTournaments = () => {
    dispatch(fetchTournaments(`&page=${pageCount}`, tournaments));
    setPageCount(pageCount + 1);
  }

  const List = () => {
    return (
      <React.Fragment>
        <ul className="tournaments-list">
          {tournaments.map(tournament => 
            <TournamentItem tournament={tournament} 
                            key={tournament.id} 
            />
          )}
        </ul>
        <div className='d-grid gap-2 col-3 mx-auto'>
          <button className='btn btn-primary mb-3' 
                  onClick={() => getMoreTournaments()} disabled={isOutOfData}
          >
          Need MORE tournaments!
          </button>
        </div>
      </React.Fragment>
    )
  }

  return (
    <section className="container">
      {tournaments.length
        ?
        <List/>
        :
        <div>Турниры отсутствуют</div>
      }
    </section>
  )
}
