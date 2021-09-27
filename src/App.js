import './App.css';
import NavBar from '../src/components/NavBar/NavBar.js'
import Home from './components/views/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import About from './components/views/About'
import Category from './components/views/Category'
import Cart from './components/Cart/Cart';
import {useState} from 'react'


function App() {
  const [cartProducts, setCartProduct] = useState([])

  const categorias = [
  {id: 1, name:"Televisores"},
  {id: 2, name:"Celulares"},
  {id: 3, name:"Lavarropa"},
  {id: 4, name:"Heladeras"}
]

  return (
    <div className="App">
   <BrowserRouter>
      <NavBar categorias={categorias}/>
        <Switch>
          <Route exact path ="/">
          <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/category/:name">
            <Category />
          </Route>
          <Route path="/product/:title">
            <ItemDetailContainer productsAdded={cartProducts} addProdFunction={setCartProduct} />
          </Route>
          <Route path="/cart">
            <Cart  productsAdded={cartProducts} addProdFunction={setCartProduct}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

