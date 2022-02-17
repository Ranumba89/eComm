import { useState } from "react";
import "./dklt.css"

const Darklight = () => {
    const [mode, setMode]= useState("dark")
    const switchListener = ()=>{
      if(mode==="light"){
        setMode("dark") 
      }else{
        setMode("light")
      }
    }
  return (
    <div className={mode}>
       <div class="row">
      <div class="col">
        Dark Mode
      </div>
      <label class="switch col">
        <input type="checkbox" id="theme-switcher" onClick ={switchListener}/>
        <span class="slider round"></span>
      </label>
      <div class="col">
        Light Mode
      </div>
    </div>
    <div class="row">
      <h1>Lorem Ipsum</h1>
    </div>
    <div class="row">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        qui
        ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
        aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
        nihil
        molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas n.
      </p>
    </div>
    </div>
  );
};
export default Darklight;

