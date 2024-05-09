import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import RegForm from './components/RegForm'
import Login from './components/Login'
import Footer from './components/Navbar/Footer'
import Navbar from "./components/Navbar/Navbar"
import Dashboard from './Dashboard'

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Determine whether to render header and footer based on the current route
  const shouldRenderHeaderAndFooter = location.pathname !== "/dashboard";

  return (
    <>
      {shouldRenderHeaderAndFooter && <Navbar/>}
      <Switch>
        <Route exact path="/" component={RegForm}/>
        <Route path="/login" component={Login}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
      {shouldRenderHeaderAndFooter && <Footer/>}
    </>
  );
}

export default App;