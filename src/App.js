// src/App.js
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Reglog/Register";
import Login from "./Reglog/Login";
import Dashboard from "./dash/Dashboard";
import GlobalStyle from "./GlobalStyle";
import Contact from "./dash/Contact";
import Settings from "./dash/Settings";
import Purchase from "./dash/Purchase";
import Rfq from "../src/dash/Rfq/Rfq";
import Rform from "../src/dash/Rfq/Rform";
import Newpr from "./dash/Newpr";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/purchase" component={Purchase} />
          <Route path="/contact" component={Contact} />
          <Route path="/settings" component={Settings} />
          <Route path="/rfq" component={Rfq} />
          <Route path="/newrfq" component={RForm} /> 
          <Route path="/npr" component={Newpr} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
