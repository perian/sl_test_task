import './app.css';
import { useDispatch, useSelector} from 'react-redux';
import { fetchTournaments } from '../data-service/data-service'
import { useEffect } from 'react';
  
function App() {
  const dispatch = useDispatch();
  const tournaments = useSelector(state => state.tournaments.tournaments);

  useEffect(() => {
    dispatch(fetchTournaments(tournaments))
  },[]);

  const getMoreTournaments = () => {
    dispatch(fetchTournaments(tournaments))
  }
  
  const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const getMonth = (month) => {
    let monthIndex = month.slice(5, 7);

    if (monthIndex.slice(0, 1) == 0) {
      monthIndex = monthIndex.slice(1, 2);
      return Months[monthIndex - 1];
    }

    return Months[monthIndex - 1];
  }

  const getFormatedDate = (date) => {
    const year = date.slice(0, 4);
    const month = getMonth(date);
    const day = date.slice(8, 10);

    return `${day} ${month}, ${year} year`;
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
              <button className='btn btn-primary' onClick={() => getMoreTournaments()} >Need MORE tournaments!</button>
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
export default App;
