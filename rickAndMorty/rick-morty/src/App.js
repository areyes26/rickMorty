import datosPeli from './rickandmorty.json'
import Tarjeta from './components/Tarjeta'
import Borrar from './components/Borrar'

console.log(datosPeli);

function App() {
  return (
    <div className="caja">
    {datosPeli.map(function(unPersonaje, idx){
      return(<Tarjeta  key={idx} personaje = {unPersonaje}/>)
    }
      )}
    </div>      
  );
}

export default App;
