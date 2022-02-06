
import { Route, Routes } from 'react-router-dom';
import { TournamentList } from '../tournament-list/tournament-list';
import { Tournament } from '../tournament-list/tournament-settings';
import ErrorPage from '../error-page/errorPage'

export default function App() {
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
