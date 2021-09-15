
import './App.css';
import NavBar from '../src/components/NavBar/NavBar.js'
import Products from './components/Products.js'
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

