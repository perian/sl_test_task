import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TournamentList from '../tournament-list/tournament-list';
import Tournament from '../tournament-list/tournament-settings';
import ErrorPage from '../error-page/errorPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route index element={<TournamentList />} />
            <Route path="tournament/:id" element={<Tournament />} />
            <Route path="*" element={<ErrorPage/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;