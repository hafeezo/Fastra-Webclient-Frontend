import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Purchead from "./dash/PurchaseModule/Purchead";
import Purchase from "./dash/PurchaseModule/Purchase";
import Rfq from "../src/dash/PurchaseModule/Rfq/Rfq";
import Rform from "../src/dash/PurchaseModule/Rfq/Rform";
import Newpr from "./dash/PurchaseModule/PurchRequest/Newpr";
import Papr from "./dash/PurchaseModule/PurchRequest/Papr";
import POrderform from "../src/dash/PurchaseModule/PurchOrder/POrderform";
import Orapr from "./dash/PurchaseModule/PurchOrder/Orapr";
import Prod from "../src/dash/PurchaseModule/Product/Prod";
import Vend from "../src/dash/PurchaseModule/Vendor/Vend";
import VendorDetails from "../src/dash/PurchaseModule/Vendor/VendorDetails";
import Newvendor from "./dash/PurchaseModule/Vendor/Newvendor";
import Varcat from "./dash/PurchaseModule/Vendor/vendorcat/Varcat";
import Edit from "./dash/PurchaseModule/Vendor/vendorcat/Edit";
import PurchaseOrder from "../src/dash/PurchaseModule/PurchOrder/PurchaseOrder";
import ProductDetails from "../src/dash/PurchaseModule/Product/ProductDetails";
import Newprod from "../src/dash/PurchaseModule/Product/Newprod";
import Procat from "./dash/PurchaseModule/Product/Prodcat/Procat";
import Rapr from "./dash/PurchaseModule/Rfq/Rapr";
import CRfq from "./dash/PurchaseModule/PurchRequest/CRfq";

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
        <Route path="/npr" component={Newpr} />
        <Route path="/papr" component={Papr} />
        <Route path="/crfq" component={CRfq} />
        <Route path="/rfq" component={Rfq} />
        <Route path="/newrfq" component={Rform} />
        <Route path="/rapr" component={Rapr} />
        <Route path="/PurchaseOrder" component={PurchaseOrder} />
        <Route path="/newPurchaseOrder" component={POrderform} /> 
        <Route path="/vendor" component={Vend} />
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