import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import SavedForLater from './components/SavedForLater';
import Checkout from './components/Checkout';
import { render } from '@testing-library/react';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
        <Route exact path='/' component={Home} />
        <Route path="/cart" component={Cart}/>
        <Route path="/savedForLater" component={SavedForLater}/>
        <Route path="/checkout" component={Checkout}/>
        </header>
      </div>
      </Router>
    )
  }
  
}

export default App;
