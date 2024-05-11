import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Reglog/Register'
import Login from './Reglog/Login'
import Dashboard from './Dashboard'
import GlobalStyle from './GlobalStyle'

function App() {
  return (
    <>
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route exact path="/" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;