import { Button } from "react-bootstrap";
import { FiArrowLeftCircle } from "react-icons/fi";
import {FiArrowRightCircle} from "react-icons/fi";
import  "../styles.css"
import { useState } from "react";
import {slideItems} from "../data"

const Slider = ()=>{
    const [slideIndex, setSlideIndex] = useState(0)
const handleClick =(direction)=>{
    if(direction==="left"){
        setSlideIndex(slideIndex>0?slideIndex-1:2)
    }else{
        setSlideIndex(slideIndex<2?slideIndex +1:0)
    }
}

    return<div className="slideContainer" name= "container">
            <div className="arrows" name="left" style={{left:10}}  onClick={()=>handleClick("left")}>
                <FiArrowLeftCircle/>
            </div>
            <div className="slideWrapped" style={{transform:`translateX(0vw)`}}>
                {
                    slideItems.map((item)=>{
                      return  <div className="slideContent" style={{backgroundColor:item.bg}}>
                        <div name="imgContainer">
                            <div className="image">
                             <img className="image" src= {item.img}/>
                            </div>
                        </div>
                        <div className="infoContainer">
                            <div><h1 className="infoTitle">{item.title}</h1></div>
                            <div className="infoDesc">{item.desc} </div>
                            <div ><button className="infoBtn">Show Now </button></div>
                        </div>
                    </div>
                    })
                }
               
    
               
            </div>
            <div className="arrows" name="right" style={{right:10}} >
                 <FiArrowRightCircle/>

            </div>
    </div>
}
export default Slider;