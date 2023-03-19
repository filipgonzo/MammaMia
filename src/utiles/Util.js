const calcularTotal = (productos) => {
    let total = 0;
    productos.map((p) => {
        total = total + (p.price * p.cant);
    })
    return total;
}

export {calcularTotal};