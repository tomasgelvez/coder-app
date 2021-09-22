
import './App.css';
import NavBar from '../src/components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'



function App() {

  

  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
    <Switch>
      <Route exact path= '/'>
        <ItemListContainer/>
      </Route>
      <Route path='/item/:itemid'>
        <ItemDetailContainer/>
      </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

