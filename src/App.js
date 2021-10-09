import {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import NavBar from '../src/components/NavBar/NavBar.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import About from './components/views/About'
import Category from './components/views/Category'
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContex';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {
  /* const [cartProducts, setCartProducts] = useState([]) */

  const categorias = [
  {id: 1, name:"Televisores"},
  {id: 2, name:"Celulares"},
  {id: 3, name:"Lavarropa"},
  {id: 4, name:"Heladeras"}
]

  return (
    <div className="App">
  
   <CartContextProvider>
      <BrowserRouter>
        <NavBar categorias={categorias}/>
          <Switch>
            <Route exact path ="/">
              <ItemListContainer/>
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/category/:name">
                <Category />
            </Route>
            <Route path="/product/:title">
                <ItemDetailContainer  />
            </Route>
            <Route path="/cart">
               <Cart />
            </Route>
        </Switch>
    </BrowserRouter>
  </CartContextProvider>
  

    </div>
  );
}

export default App;

