
import './App.css';
import NavBar from '../src/components/NavBar/NavBar.js'
import ItemsListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
    <NavBar />

    <ItemsListContainer/>
    
    </div>
  );
}

export default App;

