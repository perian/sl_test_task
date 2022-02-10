import { Route, Routes } from 'react-router-dom';
import TournamentList from '../tournament-list/tournament-list';
import Tournament from '../tournament-list/tournament-settings';
import ErrorPage from '../error-page/errorPage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTournaments } from '../data-service/data-service';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const tournaments = useSelector((state) => state.tournaments.all,);

  useEffect(() => {
    dispatch(fetchTournaments(`&page=1`, tournaments))
  }, [ ]);
  
  return (
    <div className="App">
      <Routes>
        <Route index element={<TournamentList />} />
        <Route path="tournament/:id" element={<Tournament />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;