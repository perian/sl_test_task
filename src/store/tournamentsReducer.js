const defaultState = {
  all: [],
  isOutOfData: false,
  pageNumber: 1,
  searchByTitle: "",
};

const ADD_TOURNAMENTS = "ADD_TOURNAMENTS";
const ADD_MORE_TOURNAMENTS = "ADD_MORE_TOURNAMENTS";
const SEARCH_BY_TITLE = "SEARCH_BY_TITLE";

export const tournamentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TOURNAMENTS:
      return { ...state, all: action.payload };
    case ADD_MORE_TOURNAMENTS:
      return {
        ...state,
        all: [...state.all, ...action.payload.data],
        isOutOfData: action.payload.isOutOfData,
        pageNumber: state.pageNumber + 1,
      };
    case SEARCH_BY_TITLE:
      return { ...state, searchByTitle: action.payload };
    default:
      return state;
  }
};
