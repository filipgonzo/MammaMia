//hooks 

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

// componentes y vistas
import Home from "./vistas/Home.jsx";
import Carrito from "./vistas/Carrito.jsx";
import Detalle from "./vistas/Detalle.jsx";
// contexto 
import MyContext from "./Contexto/MyContext.jsx";
import Barra from "./Componentes/Barra";


function App() {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [totalPedido, setTotalPedido] = useState(0);


  const getPizzas = async () => {
    const res = await fetch('http://localhost:3000/pizzas.json');
    const data = await res.json();
    setPizzas(data);
  };

  const agregarCarrito = (pizza) =>{
    const idx = carrito.findIndex((p) => p.id === pizza.id);
    
    if(idx>-1){
      carrito[idx].cant += 1;
      setCarrito([...carrito]);

      //pizzasPedidas = Carrito
    
    }else {
      const pizzaSeleccionada = {id:pizza.id, name:pizza.name, price: pizza.price, img: pizza.img, cant: 1};
      setCarrito([...carrito,pizzaSeleccionada]);
    }
    setTotalPedido(totalPedido+pizza.price)
  }

  useEffect(() => {
    getPizzas();
  }, []);


  return (
    <div>
      <MyContext.Provider value={{pizzas, carrito, setCarrito, setTotalPedido, totalPedido, agregarCarrito}}>
        <BrowserRouter>
          <Barra></Barra>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/carrito" element={<Carrito></Carrito>}></Route>
            <Route path="/detalle/:id" element={<Detalle></Detalle>}></Route>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
