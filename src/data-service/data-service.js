import {
  getTournamentsAction,
  getMoreTournamentsAction,
  getTournamentSettingsAction,
} from "../actions/actions";
import axios from "axios";

const _baseUrl = `https://api.gamestars.tv/streamly/v2/tournaments`;

export const fetchTournaments = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${_baseUrl}?game=pubg4x4mobile&page=1`);

      dispatch(getTournamentsAction(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchMoreTournaments = (page) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${_baseUrl}?game=pubg4x4mobile&page=${page}`
      );

      dispatch(getMoreTournamentsAction(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchTournamentSettings = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${_baseUrl}/${id}/settings`);

      dispatch(getTournamentSettingsAction(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
