import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Auth from './views/Auth'
import AuthContextProvider from './contexts/AuthContext'
import Dashboard from './views/Dashboard'


function App() {
  return (
    <AuthContextProvider>
      <div>
        <Router>

          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/login" render={props => <Auth{...props} authRoute='login' />}>

            </Route>
            <Route exact path="/register" render={props => <Auth{...props} authRoute='register' />}>

            </Route>
            <Route exact path='/dashboard' ><Dashboard />
            </Route>
          </Switch>
        </Router>
      </div>
    </AuthContextProvider>
    /* <div>
      <Router>

        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/login" render={props => <Auth{...props} authRoute='login' />}>

          </Route>
          <Route exact path="/register" render={props => <Auth{...props} authRoute='register' />}>

          </Route>
        </Switch>
      </Router>
    </div> */
  );
}

export default App
