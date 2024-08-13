class Persona{
    #nombre;
    #edad;
    #DNI;
    #sexo;
    #peso;
    #altura;
    #nacimiento;
    #estadoCivil;
    constructor(nombre,edad,DNI,sexo, peso,altura,nacimiento,estadoCivil){
        this.#nombre = nombre;
        this.#edad=edad;
        this.#DNI=DNI;
        this.#sexo=sexo;
        this.#peso=peso;
        this.#altura=altura;
        this.#nacimiento=nacimiento;
        this.#estadoCivil=estadoCivil;
    }
    get getnombre(){
        return this.#nombre;
    }
    get getedad(){
        return this.#edad;
    }
    get getDNI(){
        return this.#DNI;
    }
    get getsexo(){
        return this.#sexo;
    }
    get getpeso(){
        return this.#peso;
    }
    get getaltura(){
        return this.#altura;
    }
    get getnacimiento(){
        return this.#nacimiento;
    }
    get getestadoCivil(){
        return this.#estadoCivil;
    }
    mostrarGeneracion(){
        if (this.getnacimiento >= 1930 && this.getnacimiento <=1948){
            document.write(`${this.getnombre} pertenece a silent generation, 
                por lo que su rasgo caracteristico es: Austeridad`);
        } else if (this.getnacimiento >= 1949 && this.getnacimiento <=1968){ 
            document.write(`${this.getnombre} pertenece a la generacion "Baby Boom", 
                por lo que su rasgo caracteristico es: Ambicion`)
        } else if (this.getnacimiento >= 1969 && this.getnacimiento <=1980){ 
            document.write(`${this.getnombre} pertenece a la generacion "X", 
                por lo que su rasgo caracteristico es: Obsesion por el exito`)
        } else if (this.getnacimiento >= 1981 && this.getnacimiento <=1993){ 
            document.write(`${this.getnombre} pertenece a la generacion "Y", 
                por lo que su rasgo caracteristico es: Frustración`)
        } else if (this.getnacimiento >= 1994 && this.getnacimiento <=2010){ 
            document.write(`${this.getnombre} pertenece a la generacion "Z", 
                por lo que su rasgo caracteristico es: Irreverencia`)
        }
    }
    esMayordeEdad(){
        if(this.getedad > 0 && this.getedad<18){
            document.write(`${this.getnombre} NO es mayor de edad`);
        } else if (this.getedad > 18 && this.getedad<140)
            document.write(`${this.getnombre} es mayor de edad`);
    }
    mostrarDatos(){
        document.write(`<ul>`)
        document.write(`<li> Nombre: ${this.getnombre}</li>`)
        document.write(`<li> Edad: ${this.getedad}</li>`)
        document.write(`<li> DNI: ${this.getDNI}</li>`)
        document.write(`<li> Sexo: ${this.getsexo}</li>`)
        document.write(`<li> Peso: ${this.getpeso} Kg</li>`)
        document.write(`<li> Altura: ${this.getaltura} Cm</li>`)
        document.write(`<li> Año de nacimiento:${this.getnacimiento}</li>`)
        document.write(`<li> Estado Civil: ${this.getestadoCivil}</li>`)
        document.write(`</ul>`)
    }
    generaDNI(){
    const min = Math.ceil(10000000);
    const max = Math.floor(100000000);
    this.#DNI = Math.floor(Math.random() * (max - min) + min);
    console.log(this.getDNI)
  }
  
}

const persona1= new Persona ("David", 23, 41235434,"Varon",77, 1.75, 2000, "Casado")
persona1.mostrarGeneracion()
persona1.esMayordeEdad()
persona1.mostrarDatos()
persona1.generaDNI()
persona1.mostrarDatos()
