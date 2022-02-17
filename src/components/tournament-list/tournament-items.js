import { useSelector } from "react-redux"
import { TournamentItem } from "./tournament-item"

const Items = () => {
  const tournaments = useSelector(state => state.tournaments.all);
  const searchByTitle = useSelector(state => state.tournaments.searchByTitle);

  let filtersData = () => {
    const newArray = [...tournaments]
                    .filter(t => t.name.toLowerCase().includes(searchByTitle.toLocaleLowerCase()))

    if (searchByTitle) {
      return newArray.sort((a, b) => a.name.localeCompare(b.name))
    }

    return newArray
  };
  
  let filteredData = filtersData();

  let items = filteredData.map(tournament => 
    <TournamentItem 
      tournament={tournament} 
      key={tournament.id}/>
  );

  return items;
}

export default Items