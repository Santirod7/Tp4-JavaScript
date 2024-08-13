class Libro {
    #isbn
    #titulo
    #autor
    #numPaginas
    constructor(isbn,titulo,autor,numPaginas){
        this.#isbn = isbn
        this.#titulo=titulo
        this.#autor=autor
        this.#numPaginas=numPaginas
    }
get getISBN(){
    return this.#isbn;
}
get getTitulo(){
    return this.#titulo;
}
get getAutor(){
    return this.#autor;
}
get getNumPaginas(){
    return this.#numPaginas;
}

set setISBN (nuevoISBN){
 this.getISBN=nuevoISBN;
}
set setTitulo(nuevoTitulo){
 this.getTitulo=nuevoTitulo
}
set setAutor(nuevoAutor){
 this.getAutor=nuevoAutor
}
set setNumPaginas(nuevoNumPaginas){
 this.getNumPaginas=nuevoNumPaginas
}

mostrarLibro(){
    document.write(`<p>El libro ${this.getTitulo} con ISBN ${this.getISBN} creado por el autor ${this.getAutor} tiene ${this.getNumPaginas} páginas</p>`)
}
}
function compararLibros(libro1,libro2){
    if (libro1.getNumPaginas > libro2.getNumPaginas){
        document.write(`<p>${libro1.getTitulo} tiene más páginas</p>`)
    } else if (libro1.getNumPaginas < libro2.getNumPaginas){    
        document.write(`<p>${libro2.getTitulo} tiene más páginas</p>`)
    } else {
        document.write(`<p>${libro1.getTitulo} y ${libro2.getNumPaginas} tienen la misma cantidad de páginas</p>`)
    }
}

const TheLordOfTheRings = new Libro (9783161484100,'The lord of the rings','J.R.R Tolkien',433)
const TheChroniclesOfNarnia = new Libro (9780306406157,'The Chronicles Of Narnia','C.S.S Lewis',372)
TheLordOfTheRings.mostrarLibro()
TheChroniclesOfNarnia.mostrarLibro()
compararLibros(TheLordOfTheRings,TheChroniclesOfNarnia)