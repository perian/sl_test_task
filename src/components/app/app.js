import { useDispatch, useSelector} from 'react-redux';
import { fetchTournaments } from '../data-service/data-service'
import { useEffect, useState } from 'react';
import { TournamentList } from '../tournament-list/tournament-list';
import './app'

export default function App() {
  const dispatch = useDispatch();
  const tournaments = useSelector(state => state.tournaments.tournaments);
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

  return (
    <div className="App">
      {tournaments.length
        ?
        <TournamentList/>
        :
        <div>Турниры отсутствуют</div>
      }
      <div className='d-grid gap-2 col-3 mx-auto'>
        <button className='btn btn-primary mb-3' 
                onClick={() => getMoreTournaments()} disabled={isOutOfData}
        >
        Need MORE tournaments!
        </button>
      </div>
    </div>
  );
}
