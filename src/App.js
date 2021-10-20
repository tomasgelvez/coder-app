import { useContext } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import NavBar from '../src/components/NavBar/NavBar.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import About from './components/views/About'
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContex';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import UserContext from './context/UserContext'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';



function App() {
  
  const {user} = useContext(UserContext)



  return (
    <div className="App">

     <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route exact path ="/">
              <ItemListContainer/>
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/category/:categoryid">
                <ItemListContainer/>
            </Route>
            <Route path="/product/:itemid">
                <ItemDetailContainer  />
            </Route>
            <PrivateRoute path='/cart' user={user}>
                  <Cart />
            </PrivateRoute>
                <Route path='/login'>
                  <Login/>
                </Route>
        </Switch>
    </BrowserRouter>
  </CartContextProvider>


    </div>
  );
}

export default App;

