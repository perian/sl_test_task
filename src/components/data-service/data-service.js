export default class DataService {
  _base = `https://api.gamestars.tv/streamly/v2/tournaments`;

  async getData(url) {
    try {
      return await fetch(`${this._base}${url}`).then((response) => {
        return response.json();
      })

    } catch (e) {
      console.log(e)
    }
  }

  async getPubgMTournaments() {
    const result = await this.getData(`?game=pubg4x4mobile&page=1&per_page=20`);
    return result;
  }

  async getPubgMTournamentSettings(id) {
    const res = await this.getData(`${id}/settings`);
    // return res.results.map(this._transformPerson);
  }
}