import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Body from "./Components/Body/Body";
import Navbar from "./Components/Nav/Navbar";
import ProductPage from "./Components/ProductPage/ProductPage";
import Cart from './Components/Cart/Cart'

function App() {
  return (
    // basename = "https://saurabgami977.github.io/React_Ecommerce_1"
    <BrowserRouter >
      <div className="App">
        <Route path={process.env.PUBLIC_URL + '/'} component={Navbar} />
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} exact component={Body} />
          <Route path={process.env.PUBLIC_URL + "/product/:id"} exact component={ProductPage} />
          <Route path={process.env.PUBLIC_URL + '/cart'} exact component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
