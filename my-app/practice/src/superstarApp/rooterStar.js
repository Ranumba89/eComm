import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeS from "./HomeS";
import Players from "./Players";


const RooterStar=()=>{
    return<div>
<Router>
    <Route exact path="/" component={HomeS}/>
    <Route exact path="/players" component={Players}/>
</Router>
    </div>
}
export default RooterStar;