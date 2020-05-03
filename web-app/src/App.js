import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './comp/Nav';
import {Switch,Route} from 'react-router-dom';
import Home from './comp/Home';
import Cart from './comp/Cart/Cart';
import Shop from './comp/Shop';
import Detail from './comp/Detail';
import ModalView from './comp/ModalView';
import Footer from './comp/Footer';


function App() {
  return (
    <React.Fragment>
      <Nav/>

      <Switch>
        
        <Route path="/cart" component={Cart}/>
        <Route path="/detail" component={Detail}/>
        <Route path="/shop" component={Shop}/>
        
        <Route path="/" component={Home}/>
        
      </Switch>
      <Footer/>
      <ModalView/>
    </React.Fragment>
  );
}

export default App;
