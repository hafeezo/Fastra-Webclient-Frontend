import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Reglog/Register";
import Login from "./Reglog/Login";
import Dashboard from "./dash/Dashboard";
import GlobalStyle from "./GlobalStyle";
import Contact from "./dash/Contact";
import Settings from "./dash/Settings";
import Purchase from "./dash/Purchase";
import Rfq from "../src/dash/Rfq/Rfq";
import RForm from "../src/dash/Rfq/R-form";
import PurchaseOrder from "../src/dash/PurchaseOrder/PurchaseOrder"
import Orapr from "../src/dash/PurchaseOrder/Orapr"
import Vendor from "../src/dash/vendor/vendor";
import VendorDetails from "../src/dash/vendor/VendorDetails";
import Newvendor from "../src/dash/vendor/Newvendor";
import Varcat from "../src/dash/vendor/vendorcat/varcat";
import Edit from "../src/dash/vendor/vendorcat/edit";
import prod from "../src/dash/product/Prod"
import ProductDetails from "./dash/product/ProductDetails";
import Newprod from "./dash/product/Newprod";
import procat from "./dash/product/Prodcat/Procat"
import pedit from "./dash/product/Prodcat/Pedit"

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
          <Route path="/new-rfq" component={RForm} />
          <Route path="/PurchaseOrder" component={PurchaseOrder}/>
          <Route path="/vendor" component={Vendor} />
          <Route path="/Orapr" component={Orapr} />
          <Route path="/VendorDetails/:id" component={VendorDetails} />
          <Route path="/Newvendor" component={Newvendor} />
          <Route path="/varcat" component={Varcat} />
          <Route path="/edit" component={Edit} />
          <Route path="/prod" component={prod} />
          <Route path="/ProductDetails" component={ProductDetails} />
          <Route path="/Newprod" component={Newprod} />
          <Route path="/procat" component={procat} />
          <Route path="/pedit" component={pedit} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
