
import './App.css';
import NavBar from '../src/components/NavBar/NavBar.js'
import ItemsListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemsListContainer/>

    <ItemDetailContainer />

    </div>
  );
}

export default App;

