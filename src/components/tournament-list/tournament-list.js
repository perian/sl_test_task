import { useSelector } from "react-redux";
import { TournamentItem } from "./tournament-item"
import './tournament-list.css';

export const TournamentList = () => {
  const tournaments = useSelector(state => state.tournaments.tournaments);

  return (
    <section className="container">
      <ul className="tournaments-list">
        {tournaments.map(tournament => 
          <TournamentItem tournament={tournament} 
                          key={tournament.id} 
          />
        )}
      </ul>
    </section>
  )
}