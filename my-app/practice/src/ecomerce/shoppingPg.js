import {
  Navbar,
  Nav,
  FormControl,
  Form,
  Button,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import SearchInp from "./components/searchInp";
import "./styles.css";
import { GiShoppingCart } from "react-icons/gi";
const ShoppingPg = () => {
  return (
    <div
      className="theContainer">
      <div className="wrapper">
        <div className="leftSide">
          Left
          <SearchInp />
        </div>
        <div className="centerSide">
          center
          <div className="logo">Ecom 3000</div>
        </div>
        <div className="rightSide">
          right
          <h2 className="menuItem"> REGISTER </h2>
          <h2 className="menuItem" > LOG IN  </h2>
          <div className="menuItem">
          <GiShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingPg;
