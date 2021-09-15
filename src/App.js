
import './App.css';
import NavBar from '../src/components/NavBar/NavBar.js'
import Products from './components/products';
import ItemsListContainer from './components/ItemListContainer';


function App() {

   

  return (
    <div className="App">
    <NavBar />

    
    <Products />

    <ItemsListContainer/>
    
  </div>
  );
}

export default App;

