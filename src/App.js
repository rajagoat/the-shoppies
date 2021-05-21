import Navbar from "./Navbar";
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nominations from "./Nominations";
import { useReducer } from "react";

function App() {
  const [nomData] = useReducer([], [], () => {
    const localData = localStorage.getItem('nominations');
    return localData ? JSON.parse(localData) :  [];
  });

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home nomData={nomData}/>
          </Route>
          <Route path='/nominations'>
            <Nominations nomData={nomData}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
