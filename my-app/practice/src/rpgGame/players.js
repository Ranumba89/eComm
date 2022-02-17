import {  Button,} from "react-bootstrap";
import react, { useEffect, useState } from "react";

const Players = (props) => {
  const { player, opponent, printStats } = props;
  const { name, profession, gender, age, strength, hitpoints } = player;
  
const [attacker, setAttacker] = useState("")

  const attack =()=>{
    opponent.hitpoints=opponent.hitpoints - strength
printStats()
    
}
const attBtn =()=>{
attack()
printStats()
}

console.log(attBtn);
  return (
    <div>
      Name: {name}
      <br />
      Profession:{profession}
      <br />
      gender:{gender}
      <br />
      Age:{age}
      <br />
      Strength:{strength}
      <br />
      hitpoints:{hitpoints}
      <br />
      <Button variant="danger"  onClick={attack}>ATTACK</Button>

     

    </div>
  );
};
export default Players;
