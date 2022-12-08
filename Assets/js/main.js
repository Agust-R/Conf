function totalAPagar(cantTickets,categoria){
    const valorTicket = 200;
    let total = cantTickets * valorTicket;

    switch (categoria){
        case "1":
            total = total - (total * 80 / 100)
            break;
        case "2":
            total = total - (total * 50 / 100)
            break;
        case "3":
            total = total - (total * 15 / 100)
            break;
    }
    return total
}

let boton = document.getElementById("submitBtn")

let formulario = document.getElementById("form_tickets")

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
}
)
boton.addEventListener("click", function() {
    let cantidad = document.getElementById("cantidad").value
    let categoria = document.getElementById("categorias").value

    let valor = totalAPagar(cantidad,categoria)
    let divMensaje = document.getElementById("liveAlertPlaceholder")
    divMensaje.textContent = 'Total a pagar: $' + valor
}
)
