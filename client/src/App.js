import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Auth from './views/Auth'
import AuthContextProvider from './contexts/AuthContext'
import Dashboard from './views/Dashboard'
import ProtectedRoute from './components/routing/ProtectedRoute'
import About from './views/About'
import PostContextProvider from './contexts/PostContext'


function App() {
  return (
    <AuthContextProvider>
    <PostContextProvider><Router>

<Switch>
  <Route exact path="/">
    <Landing />
  </Route>
  <Route exact path="/login" render={props => <Auth{...props} authRoute='login' />}>

  </Route>
  <Route exact path="/register" render={props => <Auth{...props} authRoute='register' />}>

  </Route>
  <ProtectedRoute exact path='/dashboard' component={Dashboard} />
  <ProtectedRoute exact path='/about' component={About} />
  
</Switch>
</Router></PostContextProvider>
      <div>
        
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
