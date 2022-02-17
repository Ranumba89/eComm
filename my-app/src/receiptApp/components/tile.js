import { Container, Row, Col } from "react-bootstrap";
import "../css/style.css";
import { Card } from "react-bootstrap";
import Modals from "./modals";
import { useState } from "react";

const Tile = ({recipes}) => {
  

  return (
    <Container fluid="md">
      <Row>
        {recipes.map((item, index) => {
          // if(index <5)
          return (
            <Col>
              <div key={index} className="recipeTile">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    className="imgReciepe"
                    src={item.recipe.image}
                    alt={item.recipe.label}
                  />
                  <Card.Body>
                    <Card.Title> {item.recipe.label} </Card.Title>
                    <Card.Text>
                     
                      <Modals ingredientLines={item.recipe.ingredientLines} label={item.recipe.label}/>
                      

                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default Tile;
