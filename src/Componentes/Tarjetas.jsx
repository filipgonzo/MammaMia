import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MyContext from "../Contexto/MyContext";

const Tarjetas = ({ pizza }) => {
  const {agregarCarrito} = useContext(MyContext);
  const navigate = useNavigate();

  const verDetalle = () => {
    navigate(`/detalle/${pizza.id}`);
  };



  return (
    <Card style={{ width: "18rem", marginTop: "2rem" }}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title className="text-capitalize">{pizza.name}</Card.Title>
        <hr></hr>

        <div className="text-capitalize mt-2">
          <h6>Ingredientes:</h6> <br />

          <ul>
            {pizza.ingredients.map((i, index) => (
              <p key={index} className="text-capitalize">🍕 {i}</p>
            ))}
          </ul>
        </div><hr></hr>

        <div className="valorPizzaTarjeta mt-3">
          <h4>${pizza.price}</h4>
        </div>

        <Button className="verMas" onClick={() => verDetalle()}>
          Ver más 👀
        </Button>
        <Button className="anadir" onClick={() => agregarCarrito(( pizza ))}>Añadir 🛒</Button>
      </Card.Body>
    </Card>
  );
};

export default Tarjetas;
