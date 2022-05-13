let n = prompt("Ingrese la cantidad de numeros primos a mostrar");

let p = []
let nextPrimo = 1
//un numero primo es solo divisible por el mismo y por 1
// y para que sea mas eficiente la busqueda del proximo numero primo
// vamos a probar si se puede dividir solo con numeros primos 

for (let i=0;i<n;i++ )
{
    do{
        x = 0;
        nextPrimo++; 
        while ( x <p.length && (nextPrimo%p[x] != 0 ) )
        {            
            x++;
        }
    } while( x < p.length) //mientras que no se haya recorrido todo el arreglo quiere decir que se pudo dividir
    p[i]=nextPrimo;
    console.log(`${i+1}° numero primo es ${p[i]}`);
}