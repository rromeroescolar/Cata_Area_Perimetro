

function obtenerPerimetroArea(){
    let width = prompt("Introduce el ancho");
    let height = prompt("Introduce la altura");
    if(width===height){
        alert("El area del cuadrado es: " + width*height);
    }
    else if(width!=height){
       alert("El perimetro del rectangulo es: " + 2 * (parseInt(width) + parseInt(height)));
    }
}