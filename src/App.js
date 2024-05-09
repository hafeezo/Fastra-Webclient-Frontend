import { useLocation } from 'react-router-dom';
import RegForm from './components/RegForm'
import Login from './components/Login'
import Footer from './components/Navbar/Footer'
import Navbar from "./components/Navbar/Navbar"
import Dashboard from './Dashboard'
import Dashhead from './components/Navbar/Dashhead'

function AppContent() {
  const location = useLocation();

  // Determine whether to render header and footer based on the current route
  const shouldRenderHeaderAndFooter = location.pathname !== "/dashboard";

  // Determine whether to render dashboard-specific header
  const shouldRenderDashboardHeader = location.pathname === "/dashboard";

  return (
    <>
      {shouldRenderHeaderAndFooter && !shouldRenderDashboardHeader && <Navbar/>}
      {shouldRenderDashboardHeader && <Dashhead />}
      <Switch>
        <Route exact path="/" component={RegForm}/>
        <Route path="/login" component={Login}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
      {shouldRenderHeaderAndFooter && <Footer/>}
    </>
  );
}

export default AppContent;
