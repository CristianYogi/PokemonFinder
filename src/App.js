import { useEffect , useState} from 'react';
import PokemonTable from './components/PokemonTable';
import './App.css';
import PokemonFilter from './components/PokemonFilter';
import PokemonInfo from './components/PokemonInfo';

function App() {

  function handleError (res) {
    if(!res.ok) throw Error.status(res.status)
    return res.json()
  }

  const [data, setData] = useState([])

  const [filter, setFilter] = useState("")

  const [selectedPokemon, setSelectedPokemon] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/pokedex.json")
      .then(res => handleError(res))
      .then(data => setData(data))
      .catch(error => console.log(error))
  }, [])
  return (
    <section style={{display:'flex', width:'100vw', paddingTop:'1em', alignItems:'center', flexWrap:'wrap'}}>
  
      <section style={{marginLeft:'10%', isplay:'flex', flexDirection:'column', width:'60vw'}}>
      <h1 style={{textAlign:'center' , fontSize:'2em', borderBottom:'1px solid black'}}>POKEDEX</h1>
        <PokemonFilter setFilter={setFilter}></PokemonFilter>
        
        <PokemonTable data={data} filter={filter} setSelectedPokemon={setSelectedPokemon}></PokemonTable>
      </section>

      {selectedPokemon && <PokemonInfo {...selectedPokemon} setSelectedPokemon={setSelectedPokemon}></PokemonInfo>}

    </section>
  );
}

export default App;
