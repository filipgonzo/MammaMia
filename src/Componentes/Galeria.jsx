import React, { useContext } from "react";
import MyContext from "../Contexto/MyContext";
import { Container, Row, Col } from "react-bootstrap";
import Tarjetas from "./Tarjetas";

const Galeria = () => {
  const { pizzas } = useContext(MyContext);

  return (
    <div>
      <Container>
        <Row>
          {
            pizzas.map((pizza, index) => {
              return <Col key={pizza.id}><Tarjetas key={index} pizza={pizza}></Tarjetas></Col>
            })
          };
        </Row>
      </Container>
    </div>
  );
};

export default Galeria;
