import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Reglog/Register";
import Login from "./Reglog/Login";
import Dashboard from "./dash/Dashboard";
import GlobalStyle from "./GlobalStyle";
import Contact from "./dash/Contact";
import Settings from "./dash/Settings";
import Purchase from "./dash/PurchaseModule/Purchase";
import Rfq from "../src/dash/PurchaseModule/Rfq/Rfq";
import Rform from "../src/dash/PurchaseModule/Rfq/Rform";
import Newpr from "./dash/PurchaseModule/PurchRequest/Newpr";
import Papr from "./dash/PurchaseModule/PurchRequest/Papr";
import Vend from "../src/dash/PurchaseModule/Vendor/Vend";
import Pod from "../src/dash/PurchaseModule/PurchOrder/Pod";
import Prod from "../src/dash/PurchaseModule/Product/Prod";
import Rapr from "./dash/PurchaseModule/Rfq/Rapr";


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
          <Route path="/npr" component={Newpr} />
          <Route path="/papr" component={Papr} />
          <Route path="/rfq" component={Rfq} />
          <Route path="/newrfq" component={Rform} /> 
          <Route path="/rapr" component={Rapr} />
          <Route path="/pod" component={Pod} />
          <Route path="/vend" component={Vend} />
          <Route path="/prod" component={Prod} />
          <Route path="/contact" component={Contact} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
