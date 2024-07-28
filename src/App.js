import React, { Component } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Counter from './components/Counter';
import Clock from './components/Clock';
import Time from './components/Time';
import DataFetcher from './components/DataFetcher';
import Timer from './components/Timer';
export default class App extends Component {
  constructor(){
    super();
    this.state= {
      count:0
    }
  }

  componentDidMount(){
    console.log("ComponentDidMount: When componenet render first time");
  }
  increment(){
    this.setState({count: this.state.count+1});
  }
  render() {
    return (
      <Router>
      <div className='App'>
      <div>
        {/* <h3>
          <Link to='/counter'>Counter</Link>
        </h3> */}
        <span>
          <Link to='/'> Clock ||</Link>
        </span>
        <span>
          <Link to='/time'> time  ||</Link>  
        </span>
        <span>
          <Link to='/data-fecter'>  Date-Fetching  ||</Link>  
        </span>
        <span>
          <Link to='/timer'>  Timer </Link>
        </span>
      </div>
      <Routes>
      {/* <Route path='/' element={<Counter number={this.state.count}/>}/>
      
      <button onClick={this.increment.bind(this)}>increment</button> */}
      <Route path='/' element = {<Clock/>}/>
      <Route path='/time' element = {<Time/>}/>
      <Route path='/timer' element = {<Timer/>}/>
      <Route path='/time' element = {<DataFetcher/>}/>
      
      
      </Routes>
      </div>
      </Router>
    )
  }
}



// function App() {
//   return (
//     <div className="App">
//       Helllo
//     </div>
//   );
// }

// export default App;
