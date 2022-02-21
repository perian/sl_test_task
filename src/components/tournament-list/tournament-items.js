import { useSelector } from "react-redux";
import { filterSelector } from "../../selectors/selectors";
import { store } from "../../store";
import { TournamentItem } from "./tournament-item";

const Items = () => {
  const state = store.getState(); 
  const tournaments = useSelector(state => state.tournaments.all);
  const searchByTitle = useSelector(state => state.tournaments.searchByTitle);

  const filteredData = filterSelector(state);

  const items = filteredData.map(tournament => 
    <TournamentItem 
      tournament={tournament} 
      key={tournament.id}/>
  );

  return items;
}

export default Items