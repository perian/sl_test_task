export const getTournamentsAction = (payload) => (
  console.log(payload),
  {type: ADD_TOURNAMENTS, payload}
)

export const getTournamentSettingsAction = (payload) => (
  {type: ADD_TOURNAMENT_SETTINGS, payload}
)
