
import { Card } from "react-bootstrap";

const InputForm = (props)=>{
    return<div>
<Card className="text-center">
  <Card.Body>

<input onChange={props.recipename}/>
<button onClick={props.searchrecipe}>Search</button>

  </Card.Body>
</Card>
    </div>
}

export default InputForm;