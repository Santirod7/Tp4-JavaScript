
/* 1- Crea un objeto llamado auto que tenga algunas características como
el color, marca, modelo y si está encendido o apagado. Crea los 
métodos necesarios para permitir encender y apagar el auto. */

const auto = {
    //Propiedad
    color: [`blanco`, `negro`, `gris`],
    marca: `Citroen`,
    modelo: `C4`,
    motor: false,
    //Métodos
    encender: function(){
        this.motor=true
    },
    apagar: function(){
        this.motor=false
        }
}
document.write(`<h2><b>Auto en venta</b></h2>`); 
document.write(`<ol>
    <li> Color:[${auto.color[0]}, ${auto.color[1]},${auto.color[2]}]</li>
    <li> Marca:${auto.marca} </li>
    <li> Modelo:${auto.modelo} </li>
    <li> Estado:${(auto.motor)? `Encendido` : `Apagado`} </li>
    </ol>`)
auto.encender()
document.write(`Estado:${(auto.motor)? `Encendido` : `Apagado`}`); 
document.write(`<br>`); 

auto.apagar()
document.write(`Estado:${(auto.motor)? `Encendido` : `Apagado`}`); 