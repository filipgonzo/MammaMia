import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import MyContext from "../Contexto/MyContext";
import { calcularTotal } from "../utiles/Util";

const Carrito = () => {
  const { carrito, totalPedido, setCarrito, setTotalPedido } =
    useContext(MyContext);
  //pizzasPedidas = Carrito
  const restarCantidad = (id) => {
    const idx = carrito.findIndex((p) => p.id === id);
    if (idx >= 0) {
      if (carrito[idx].cant > 0) {
        carrito[idx].cant -= 1;
        if(carrito[idx].cant===0){
          carrito.splice(idx,1);
        }
        setCarrito([...carrito]);
      }
    }
    const totalPedidoActual = calcularTotal(carrito);
    setTotalPedido(totalPedidoActual);
  };
  const sumarCantidad = (id) => {
    const idx = carrito.findIndex((p) => p.id === id);
    if (idx > -1) {
      carrito[idx].cant += 1;

      setCarrito([...carrito]);
    }
    const totalPedidoActual = calcularTotal(carrito);
    setTotalPedido(totalPedidoActual);
  };

  return (
    <div className="titulo">
      <h3>Detalles del pedido</h3>
      <div>
        {carrito.map((p, i) => {
          return (
            <div className="carrito" key={p.i}>
              <div className="imgPizza">
                {" "}
                <img src={p.img} alt="imagenPizza" />{" "}
              </div>
              <div className="text-capitalize">
                {" "}
                <strong>{p.name}</strong>{" "}
              </div>
              <div className="subtotal">
                <strong>$ {p.cant * p.price}</strong>
              </div>

              <div>
                <Button variant="danger" onClick={() => restarCantidad(p.id)}>
                  -
                </Button>
                <strong className="px-3">{p.cant}</strong>
                <Button onClick={() => sumarCantidad(p.id)}>+</Button>
                
              </div>
            </div>
          );
        })}

        <div className="totalPedido"> Total Pedido: ${totalPedido} </div>
      </div>
    </div>
  );
};

export default Carrito;
