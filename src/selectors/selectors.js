import { createSelector } from "reselect";

const tournaments = (state) => state.tournaments.all;
const searchByTitle = (state) => state.tournaments.searchByTitle;

export const filterSelector = createSelector(
  searchByTitle,
  tournaments,
  (searchByTitle, tournaments) => {
    if (searchByTitle) {
      return tournaments
        .filter((t) =>
          t.name.toLowerCase().includes(searchByTitle.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name));
    }
    return tournaments;
  }
);
