
import { BrowserRouter as Router, Route } from "react-router-dom";
import Mainrecipepage from "./mainrecipepage";
import Reclandingpage from "./reclandingpage";

const Rooter =()=>{
    return <div>
        <Router>

        <Route exact path="/" component={Reclandingpage} />
        <Route exact path="/recipes" component={Mainrecipepage} />

        </Router>
    </div>
}
export default Rooter;