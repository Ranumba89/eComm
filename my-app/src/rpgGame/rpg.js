import react, { useEffect, useState } from "react";
import { Card, Button, Container,Col,Row } from "react-bootstrap";
import Players from "./players"
const Rpg = () => {
  // name, profession, gender, age, strength, hitpoints
  const warrior = {
    name: "Crusher",
    profession: "Warrior",
    gender: "Male",
    age: 25,
    strength: 10,
    hitpoints: 75,
  };
  const rogue = {
    name: "Dodger",
    profession: "Rogue",
    gender: "Female",
    age: 23,
    strength: 20,
    hitpoints: 50,
  };

  const [gameData, setGameData] = useState({warrior, rogue})

  const printStats = ()=>{

    const obj ={}
obj.warrior= {...gameData.warrior}
obj.rogue = {...gameData.rogue}
setGameData(obj)
  }

  return <div style={{border:"1px solid red", padding:10, margin: 10, textAlign:"left"}}>
     
      <Container>
  <Row>
    <Col>
    <Players player={gameData.warrior} opponent ={gameData.rogue} printStats={printStats}/>
    </Col>
    <Col>

   <Players player = {gameData.rogue} opponent ={gameData.warrior} printStats={printStats}/>
    </Col>
  </Row>
</Container>
  </div>;
};
export default Rpg;
