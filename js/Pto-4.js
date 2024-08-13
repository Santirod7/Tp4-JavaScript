class Productos{
    constructor(codigo,nombre,precios){
        this.codigo = codigo
        this.nombre= nombre
        this.precios = precios
    }
    mostrarDatos(){
        document.write(`
            <tr>
        <td>${this.codigo} </td>
        <td>${this.nombre} </td>
        <td> $${this.precios} </td>
    </tr>`)
    }
}

const prod = [0,0,0]
prod[0] = new Productos ("01", "AMD Sentey Gaming Radeon RX 500 Series RX 580 Dual Fan Gaming", 206.557);
prod[1] = new Productos ("02", "AMD Sentey Radeon RX 550 4GB GDRR5 6000mhz", 168.629);
prod[2] = new Productos ("03", "AMD Gigabyte Eagle Radeon RX 6400 Series RX 6400 GV-R64EAGLE-4GD 4GB", 196.999)

document.write(`
    <table> <tr>
<th>Cod</th>
<th>Nombre</th>
<th>Precio</th>
</tr>`)
for(let i=0 ; i<prod.length ; i++){
        prod[i].mostrarDatos()
}
document.write(`
</table>`)