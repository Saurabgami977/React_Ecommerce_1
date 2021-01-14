import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Body from "./Containers/Body/Body";
import Navbar from "./Components/Nav/Navbar";
import ProductPage from "./Containers/ProductPage/ProductPage";
import Cart from './Containers/Cart/Cart'

function App() {
  return (
    // basename = "https://saurabgami977.github.io/React_Ecommerce_1"
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <div className="App">
        <Route path='/' component={Navbar} />
        <Switch>
          <Route path='/' exact component={Body} />
          <Route path="/product/:id" exact component={ProductPage} />
          <Route path='/cart' exact component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
