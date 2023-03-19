import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MyContext from "../Contexto/MyContext";

const Detalle = () => {
  const { id } = useParams();
  const { pizzas, agregarCarrito } = useContext(MyContext);

  const pizzaDetalle = pizzas.filter((p) => p.id === id);
  return (
    pizzas.length > 0 && (
      <Container>
        <div className="detalle">
          <div className="imagen">
            <img src={pizzaDetalle[0].img} alt="imagenPizza" ></img>
          </div>
          <div className="datos">
            <h3 className="text-capitalize">
              {pizzaDetalle[0].name} <hr></hr> 
            </h3>
            <p>{pizzaDetalle[0].desc}</p>

            <h5>Ingredientes:</h5>
            <ul>
              {pizzaDetalle[0].ingredients.map((i, e) => (
                <p key={e} className="text-capitalize">
                  🍕{i}
                </p>
              ))}
            </ul>
            <div className="precio">
              <h4>Precio: ${pizzaDetalle[0].price}</h4>

              <Button
                className="anadir m-2"
                onClick={() => agregarCarrito(pizzaDetalle[0])}
              >
                Añadir 🛒
              </Button>
            </div>
          </div>
        </div>
      </Container>
    )
  );
};

export default Detalle;
