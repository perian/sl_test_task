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

  return (
    <div className="App">
      <button onClick={() => dispatch(fetchTournaments())} >addTournaments</button>
      <button>remove</button>
      {tournaments.length
        ?
        <section>
          <ul>
            {tournaments.map(tournament => 
              <li style={{backgroundColor: 'grey', width: '300px', height: '200px'}} key={tournament.id}>
                {tournament.name}
                {tournament.status}
                {tournament.live_start_at}
                <img style={{backgroundColor: 'grey', width: '300px', height: '200px'}} src={tournament.streamly_logo} width></img>
              </li>
            )}
          </ul>
        </section>
        :
        <div>Турниры отсутствуют</div>
      }
    </div>
  );
}
export default App;


