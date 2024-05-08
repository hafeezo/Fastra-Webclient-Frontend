import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegForm from './components/RegForm'
import Login from './components/Login'
import Footer from './components/Navbar/Footer'
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
  <Route exact path="/" component={RegForm}/>
  <Route path="/login" component={Login}/>
</Switch>

      <Footer/>
    </Router>
    </>
  )
}

export default App;