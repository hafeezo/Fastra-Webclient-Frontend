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
import VendorDetails from "../src/dash/PurchaseModule/Vendor/VendorDetails";
import Newvendor from "../src/dash/PurchaseModule/Vendor/Newvendor";
import Varcat from "./dash/PurchaseModule/Vendor/vendorcat/Varcat";
import Edit from "./dash/PurchaseModule/Vendor/vendorcat/Edit";
import Pod from "../src/dash/PurchaseModule/PurchOrder/Pod";
import Prod from "../src/dash/PurchaseModule/Product/Prod";
// import ProductDetails from "../src/dash/PurchaseModule/Product/ProductDetails";
import Newprod from "../src/dash/PurchaseModule/Product/Newprod";
// import Procat from "./dash/PurchaseModule/Product/procat/Procat";
// import Predit from "./dash/PurchaseModule/Product/procat/Predit";
import Rapr from "./dash/PurchaseModule/Rfq/Rapr";
import CRfq from "./dash/PurchaseModule/PurchRequest/CRfq";

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
          <Route path="/crfq" component={CRfq} />
          <Route path="/rfq" component={Rfq} />
          <Route path="/newrfq" component={Rform} /> 
          <Route path="/rapr" component={Rapr} />
          <Route path="/pod" component={Pod} />
          <Route path="/vend" component={Vend} />
          <Route path="/VendorDetails/:id" component={VendorDetails}/>
          <Route path="/Newvendor" component={Newvendor} />
          <Route path="/varcat" component={Varcat} />
          <Route path="/edit" component={Edit} />
          <Route path="/prod" component={Prod} />
          {/* <Route path="/ProductDetails/:id" component={ProductDetails}/> */}
          <Route path="/newprod" component={Newprod} />
          {/* <Route path="/procat" component={Procat} /> */}
          {/* <Route path="/predit" component={Predit} /> */}
          <Route path="/contact" component={Contact} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
