import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import MyContext from "../Contexto/MyContext";



const Barra = () => {
  const{totalPedido} = useContext(MyContext);
  
  return (
    <div className="barra">
      <NavLink className= {({isActive}) => (isActive ? "viewActiva" : "view")} 
      to="/"> 🍕Pizzería Mamma Mia! </NavLink>

      <NavLink className={({isActive}) => (isActive ? "viewActiva" : "view")} 
      to="/carrito"> 🛒 $ {totalPedido}  </NavLink>

      
    </div>
  );
};

export default Barra;
