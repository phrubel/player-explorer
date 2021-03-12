import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import PlayerDetails from './components/PlayerDetails/PlayerDetails';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/player/:idPlayer">
            <PlayerDetails/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
