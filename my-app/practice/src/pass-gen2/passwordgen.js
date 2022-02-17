import { Form, Button} from "react-bootstrap";
import react, {  useState } from "react";

const Passwordgen = ()=>{

    const [randomPassword, setRandomPassword] = useState("")

    const GenPassword = ()=>{

        const lowerCaseChars = ["a","e","i","o","u","b","k","m"]
        let randomWord = "";
for (let index = 0; index < 4; index++) {
        const randomLetter = lowerCaseChars[Math.floor(Math.random()*lowerCaseChars.length)]
        // randomWord = randomWord + randomLetter
        setRandomPassword(randomLetter)
        
    alert(randomPassword)

    
}
    }
    return<div>
<Form>
  
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Password Generator</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
 <Button onClick={GenPassword} variant="info">Generate</Button>{' '}
    </div>
}
export default Passwordgen;