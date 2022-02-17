import { Jumbotron, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import Tile from "./components/tile";
import InputForm from "./components/inputForm";

const appKey = "5cf1678b66b687897855b342ee20ede8";
var appId = "5cf2449c";

const Mainrecipepage = () => {
  const [recipes, setRecipes] = useState([]);
//   const [recipeName, setRecipeName] = useState("");
let recipeName = "";
  const recipename = (e) => {
    const inpChange = e.target.value;
    // setRecipeName(inpChange);
    recipeName = inpChange
  };
    // const searchRecipe = async()=>{
    //   const appUrl = await fetch(`https://api.edamam.com/search?app_id=${appId}&app_key=${appKey}&q=${recipeName}`);
    //   const data = await appUrl.json()
    //   // console.log(data.hits);
    //   setRecipes(data.hits)
    //   console.log(recipes);
    // }

  const searchRecipe = () => {
    fetch(
      `https://api.edamam.com/search?app_id=${appId}&app_key=${appKey}&q=${recipeName}`
    ).then((response) => {
        if (response.ok) {
          return response.json();
        }else{
            console.log(response.error);
        }
      }).then((data) => {
        // console.log(data.hits);
        setRecipes(data.hits);
        console.log(recipes);
      });
  };
  return (
    <div>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>See Your reciepes</p>
        <p>
          <Link to="/">
            <Button variant="primary">Home</Button>
          </Link>
        </p>
      </Jumbotron>
      <InputForm recipename={recipename}
      searchrecipe={searchRecipe}
      />
      <Tile recipes={recipes}/>
      {/* <input onChange={recipename} /> */}
      {/* <button onClick={searchRecipe}>Search</button> */}
      
      

    </div>
  );
};
export default Mainrecipepage;
