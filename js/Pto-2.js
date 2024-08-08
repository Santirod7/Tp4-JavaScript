/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes 
propiedades:
● Una propiedad titular con el valor "Alex".
● Una propiedad saldo, teniendo como valor inicial 0.
● Un método ingresar() que permita añadir dinero a la cuenta, pasando 
la cantidad como parámetro
● Un método extraer() que permita retirar la cantidad pasada como
parámetro.
● Un método informar() que retorne la información del estado de la 
cuenta. Utiliza este objeto para mostrar la descripción, ingresar 
y extraer  dinero y volver a mostrar la descripción del estado 
de la cuenta.*/
class cuentas {
    constructor(titular) {
        this.titular=titular;
        this.saldo=0;
    }

    ingresar(monto){
        this.saldo+=monto
        document.write(`<p>Ingresaste: $${monto}</p>`);
    }
    egreso(monto){
        if(this.saldo>=monto){    
            document.write(`<p>Sacaste: $${monto}</p>`);
            this.saldo-=monto
        } else {
            document.write(`<p>Saldo insuficiente</p>`);
        }
    }
    informar(){
        document.write(`<p>La cuenta de ${this.titular} tiene: $${this.saldo} de saldo</p>`);
    }
}

let cuenta= new cuentas (`Alex`); 
for(let i=0; confirm("¿Quieres ingresar dinero?"); i++){
    cuenta.ingresar(parseInt(prompt("Monto:")));
}
cuenta.informar();
cuenta.egreso(parseInt(prompt("Extraer:")));
cuenta.informar();