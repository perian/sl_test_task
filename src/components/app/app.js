
import { Route, Routes } from 'react-router-dom';
import { Tournament } from '../tournament-list/tournament';
import Main from './main';
import ErrorPage from '../error-page/errorPage'
import './app';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Main />} />
        <Route path="tournament" element={<Tournament />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}
