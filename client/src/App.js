import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Landing from './components/Landing'

function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App
