const ADD_TOURNAMENTS = "ADD_TOURNAMENTS";
const ADD_MORE_TOURNAMENTS = "ADD_MORE_TOURNAMENTS";
const ADD_TOURNAMENT_SETTINGS = "ADD_TOURNAMENT_SETTINGS";
const SEARCH_BY_TITLE = "SEARCH_BY_TITLE";

export const getTournamentsAction = (payload) => ({
  type: ADD_TOURNAMENTS,
  payload,
});

export const getTournamentSettingsAction = (payload) => ({
  type: ADD_TOURNAMENT_SETTINGS,
  payload,
});

export const getMoreTournamentsAction = (payload) => ({
  type: ADD_MORE_TOURNAMENTS,
  payload: {
    data: payload,
    isOutOfData: payload.length < 20 ? true : false,
  },
});

export const filterByTitleAction = (payload) => ({
  type: SEARCH_BY_TITLE,
  payload,
});
