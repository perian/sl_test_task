import { TournamentItem } from "./tournament-item"
import './tournament-list.css';

export const TournamentList = () => {
  return (
    <section className="container">
      <ul className="tournaments-list">
        <TournamentItem/>
      </ul>
    </section>
  )
}