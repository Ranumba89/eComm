import { Card, Button, Tab, Tabs, Form, FormControl } from "react-bootstrap";
import Mody from "./mody";
import playa from "./playa.json";
import { useState } from "react";

const Players = () => {
    const [searchFilter, setSearchFilter] = useState(playa)
const searchFilt=(e)=>{
    const searchVal= e.target.value
    const filteredItem = playa.filter((item, index)=>{
        const nameFilter = `${item.name}`
        return nameFilter.includes(searchVal)
    })
    setSearchFilter(filteredItem)
}

const filtButn=(era)=>{
    const filtBtn= playa.filter((item,index)=>{
        const filtEra= `${item.era}`
        return filtEra.includes(era)
    })
    setSearchFilter(filtBtn)
}


  return (
    <div >
        <div style={{justifyContent:"flex-end", display:"flex"}}>
        <Form inline >
            <FormControl type="text" placeholder="Search" className="mr-sm-2"onChange={searchFilt} />
            <Button variant="outline-success">Search</Button>
          </Form>
          {
              playa.map((item,index)=>{
                  return <button onClick={()=>{filtButn(item.era)}}>{item.era}</button>
              })
          }

        </div>
       <content style={{display:"inline-flex", justifyContent:"flex-end"}}> 
      {searchFilter.map((item, index) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                  {item.package.map((item, index) => {
                    return (
                      <Tab eventKey="home" title="Home">
                        <iframe
                       style={{ width:"13rem", height:"22rem"}}
                          src={`https://www.youtube.com/embed/${item.video}`}
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                        <Mody dets={item.detail}/>
                      </Tab>
                    );
                  })}
                </Tabs>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
      </content>
    </div>
  );
};
export default Players;
