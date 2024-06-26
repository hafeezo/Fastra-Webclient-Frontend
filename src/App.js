import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Register from "./Reglog/Register";
import Login from "./Reglog/Login";
import Dashboard from "./dash/Dashboard";
import GlobalStyle from "./GlobalStyle";
import Contact from "./dash/Contact";
import Settings from "./dash/Settings";
import Purchead from "./dash/Purchead";
import Purchase from "./dash/Purchase";
import Rfq from "../src/dash/Rfq/Rfq";
import RForm from "../src/dash/Rfq/R-form";
import PurchaseOrder from "../src/dash/PurchaseOrder/PurchaseOrder";
import Orapr from "../src/dash/PurchaseOrder/Orapr";
import Vendor from "../src/dash/vendor/vendor";
import VendorDetails from "../src/dash/vendor/VendorDetails";
import Newvendor from "../src/dash/vendor/Newvendor";
import Varcat from "../src/dash/vendor/vendorcat/varcat";
import Edit from "../src/dash/vendor/vendorcat/edit";
import Prod from "../src/dash/product/Prod";
import ProductDetails from "./dash/product/ProductDetails";
import Newprod from "./dash/product/Newprod";
import Procat from "./dash/product/Prodcat/Procat";
import Pedit from "./dash/product/Prodcat/Pedit";

function App() {
  const location = useLocation();
  const noHeaderRoutes = ["/", "/login", "/dashboard", "/contact", "/setting"];
  return (
    <div className="App">
      {!noHeaderRoutes.includes(location.pathname) && <Purchead />}
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/contact" component={Contact} />
        <Route path="/settings" component={Settings} />
        <Route path="/purchase" component={Purchase} />
        <Route path="/rfq" component={Rfq} />
        <Route path="/new-rfq" component={RForm} />
        <Route path="/PurchaseOrder" component={PurchaseOrder} />
        <Route path="/vendor" component={Vendor} />
        <Route path="/Orapr" component={Orapr} />
        <Route path="/VendorDetails/:id" component={VendorDetails} />
        <Route path="/Newvendor" component={Newvendor} />
        <Route path="/varcat" component={Varcat} />
        <Route path="/edit" component={Edit} />
        <Route path="/prod" component={Prod} />
        <Route path="/ProductDetails" component={ProductDetails} />
        <Route path="/Newprod" component={Newprod} />
        <Route path="/procat" component={Procat} />
        <Route path="/pedit" component={Pedit} />
      </Switch>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;