import styled from "styled-components";
import Purchead from "./Purchead";
import Purchreq from "./PurchRequest/Purchreq";
import Rfq from "./Rfq/Rfq";
import Bg from "../../image/bg.svg";
import Vend from "./Vendor/Vend";
import Prod from "./Product/Prod";
import PurchaseOrder from "./PurchOrder/PurchaseOrder";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default function Purchase() {
  return (
    <Router>
      <Purcont id="purchase">
        <Purchead />
        <Switch>
          <Route path="/purchase" component={Purchreq} />
          <Route path="/rfq" component={Rfq} />
          <Route path="/vend" component={Vend} />
          <Route path="/prod" component={Prod} />
          <Route path="/pod" component={PurchaseOrder} />
        </Switch>
      </Purcont>
    </Router>
  );
}

const Purcont = styled.div`
  height: 120vh;
  width: 100%;
  background-image: url(${Bg});
  background-size: contain;
  margin: 0;
  padding: 0;
  font-family: Product Sans;
  overflow: auto;
`;
