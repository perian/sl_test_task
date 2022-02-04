import './app.css';
import { useDispatch, useSelector} from 'react-redux';
import { fetchTournaments } from '../data-service/data-service'
import { useEffect, useState } from 'react';

export default function App() {
  const dispatch = useDispatch();
  const tournaments = useSelector(state => state.tournaments.tournaments);
  const isMoreData = useSelector(state => state.tournaments.dataLimit);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    dispatch(fetchTournaments(`&page=1`,tournaments));
    setPageCount(pageCount + 1);
  },[]);


  const getMoreTournaments = () => {
    dispatch(fetchTournaments(`&page=${pageCount}`, tournaments));
    setPageCount(pageCount + 1);
  }
  
  const Months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
  }

  const getFormatedDate = (date) => {
    const year = date.slice(0, 4);
    const month = Months[date.slice(5, 7)];
    const day = date.slice(8, 10);

    return `${day} ${month}, ${year}`;
  }

  const TournamentItem = () => {
    return (
      <section className="container">
          <ul className="tournaments__list">
            {tournaments.map(tournament => 
              <li className='card card-decoration' 
                  key={tournament.id}>
                  <a href='#'>
                    <img className='card-img-top' src={tournament.streamly_logo} width="300" height="150" alt='tournamment logo'/>
                  </a>
                <div className='card-body'>
                  <h5 className='card-title'>
                    <a className='card-title-link' href='#'>{tournament.name}</a>
                  </h5>
                  <p className='card-text'>Start date: {getFormatedDate(tournament.live_start_at)}</p>
                  <p className='card-text'>
                    Status: {tournament.status}
                  </p>
                </div>
              </li>
            )}
          </ul>
           <div className='d-grid gap-2 col-3 mx-auto'>
              <button className='btn btn-primary' 
                      onClick={() => getMoreTournaments()} disabled={isMoreData}
              >
              Need MORE tournaments!
              </button>
          </div>
        </section>
    )
  }

  return (
    <div className="App">
      {tournaments.length
        ?
        <TournamentItem/>
        :
        <div>Турниры отсутствуют</div>
      }
    </div>
  );
}
