/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
propiedades de alto y ancho, mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el área */
class Rectangulo {
    constructor(ancho,alto){
        this.ancho=ancho
        this.alto=alto
        this.Perimetro=0
        this.Area=0
    }
    modificar(base,altura){
        this.ancho=base;
        this.alto=altura;
        this.Perimetro =2*(base + altura);
        this.Area = base * altura;
    }  

    mostrarPropiedades(){
        document.write(`<p>El rectangulo tiene las siguientes propiedades:</p>`)
        document.write(`<ol>
            <li>Ancho: ${this.ancho}cm</li>
            <li>Altura: ${this.alto}cm</li>
            </ol>`);
        document.write(`Segun estos parametros: <ol>
            <li>Su perimetro es: ${this.Perimetro}cm</li>
            <li>Su Area: ${this.Area}cm2</li>
            </ol>`);
        } 
}
let rectangle=new Rectangulo(0,0)
rectangle.modificar(
            parseInt(prompt("Ingrese el ancho")),
            parseInt(prompt("Ingrese el alto")))
rectangle.mostrarPropiedades()