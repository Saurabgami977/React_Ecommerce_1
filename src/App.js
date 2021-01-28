import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Body from './Containers/Body/Body';
import Navbar from './Components/Nav/Navbar';
import ProductPage from './Containers/ProductPage/ProductPage';
import Cart from './Containers/Cart/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Navbar} />
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/product/:id" exact component={ProductPage} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
