import { ListGroup, Card, Button } from "react-bootstrap";
import react, { useState } from "react";


const RandomPassword = () => {
    const vowels = ["a", "e","i","o", "u"]
const [randomness, setRandomness] = useState("")
    const randomHandler = ()=>{
        const newRandomArray = vowels.map((item, index)=>{
     const randomLetters = vowels[Math.floor(Math.random()* vowels.length)]
    return randomLetters
        })
        setRandomness(newRandomArray)
    }
  return <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      {randomness}
    </Card.Text>
    <Button onClick={randomHandler} variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
      </ListGroup>

    </div>

};

export default RandomPassword;
