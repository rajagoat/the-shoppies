import Navbar from "./Navbar";
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nominations from "./Nominations";

function App() {
  const nomData = [];

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
