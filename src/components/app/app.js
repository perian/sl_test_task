import { useState, useEffect} from 'react';
import DataService from '../data-service/data-service';
import './app.css';
  
function App() {
  const dataService = new DataService();

  const [data, setData] = useState(null);

  async function fetchData() {
    setTimeout(async () => {
      const tournaments = await dataService.getPubgMTournaments();
      setData(tournaments);
    })
  }
  
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      Hola!
    </div>
  );
}

export default App;
