import React from 'react';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Players from './Players';
import Teams from './Teams';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path='/' exact component={Home}/>
          <Route path='/teams' exact component={Teams}/>
          <Route path='/players' exact component={Players}/>
          <Route render = {()=>{ return(<h1 className='text-center'>Four oh Four</h1>)}}/>
        </Switch>        
      </div>
    </Router>
  );
}

export default App;
