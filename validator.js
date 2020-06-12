//N° de identificación para probar: 5210569505439850

//Declarar función para validar tarjeta.
function isValidCard(separar) {
var id = document.getElementById('identificacion').value;

//Declarar un array que separe los valores.
var cardArray = id.split(''); 
//console.log("Arreglo:", cardArray)

//Invertir el arreglo.
var reversa = cardArray.reverse(); 
//console.log("Reversa:", reversa)

//Declaramos variables que guardan datos de suma.
var sumaUno = 0;
var sumaDos = 0;

//Iniciar ciclo for desde 0 hasta 16.
  for (var i = 0; i < reversa.length; i++){

    //Si el módulo es 0 es par
    if(i % 2 == 0){ //Posición par
      //console.log("Posición", i)

      reversa[i] //Valor de la posición par
      //console.log("Pares", reversa[i])

      //Convertir en números.
      var multiplicacionPar= parseInt(reversa[i]); 
      //console.log(multiplicacionPar)

      //números menores a 4 se multiplican * 2. 
        if(multiplicacionPar <= 4){
          //console.log("Par menor", multiplicacionPar)
          multiplicacionPar = multiplicacionPar * 2
          //console.log("multiplicacionPar", multiplicacionPar)
          sumaUno = sumaUno + multiplicacionPar;
          //console.log(sumaUno)

      }
      //Números mayores a 5.
      else if (multiplicacionPar >= 5){ 

        //Convertir el dato en cadena.
        var mayores = multiplicacionPar.toString();
        //console.log(mayores)
         
        //Separar los datos.
        var mayoresArray = mayores.split('');
        //console.log(mayoresArray)

        //Convertimos en números.
        var multiDos = parseInt(mayoresArray);
        //console.log(multiDos)

        multiDos = multiDos * 2
        //console.log(multiDos)

        //Convertimos en cadena
        var cadenaUno = multiDos.toString();
        //console.log(cadenaUno)
          
        //Convertimos en arreglo y separamos 
        var multiDosArray = cadenaUno.split('');
        //console.log(multiDosArray)

        //Creamos array que permita separar el digito 1.
        var separarCadenaUno = multiDosArray.slice(0);
        //console.log(separarCadenaUno)

        //convertimos los números a enteros
        var enteroUno = parseInt(separarCadenaUno);
        //console.log(enteroUno)

        //Creamos array que permita separar el digito 2.
        var separarCadenaDos = multiDosArray.slice(1);
        //console.log(separarCadenaDos)

        //Convetir en enteros.
        var enteroDos = parseInt(separarCadenaDos);
        //console.log(enteroDos)

        //Sumar.
        var sumaM = enteroUno + enteroDos;
        //console.log(sumaM)

        //Sumar.
        sumaDos = sumaDos + sumaM;
        //console.log(sumaDos)
    }
    }
  }

//Declarar variable suma pares.
var sumaP = 0;

//Sumar.
sumaP = sumaUno + sumaDos;
//console.log(sumaP)
  
//Declarar variable suma impares.
var sumaI = 0;

  //Posiciones impares
  for (var j = 0; j < reversa.length; j++){

    //Si el módulo es diferente a 0, significa que es impar.
     if(j % 2 !== 0){
      //console.log("Posición", j)

      reversa[j] //Valor de la posición impar
      //console.log("Posición impar", reversa [j])

      //Convertir en números.
      var numeroImpar = parseInt(reversa[j]); 
      //console.log("Impares", numeroImpar)

      //Sumar.
      sumaI = sumaI + numeroImpar;
      //console.log("La suma impar es", sumaI)
     }
  }

//Suma de pares e impares.
var sumaTotal = 0;
sumaTotal = sumaI + sumaP;
console.log(sumaTotal);

  //Si es módulo de 10, la tarjeta es válida.
  if (sumaTotal % 10 === 0) {
  console.log("La tarjeta es válida");
  document.getElementById('validCard').innerHTML = 'Tu tarjeta es valida';
  return abrir();
  } 

  //Si no es módulo de 10, la tarjeta es invalida.
  else {
  console.log("La tarjeta es inválida");
  document.getElementById('inValidCard').innerHTML= 'Tu tarjeta no es válida';
  return abrirx();
  }
}

//Declarar función de enmascarado.
function maskify() {

  //Traer el dato que vamos a enmascarar: ID
  var dato = document.getElementById('identificacion').value;
  //console.log(dato)

//Señalar ultimos digitos.
  var digitos = dato.slice(-4); 
  //console.log(digitos)

//Enmascarar datos
  var enmascarar = "************" + digitos;
  //console.log(enmascarar)
  document.getElementById('maskify').innerHTML= enmascarar;
}

//Declaramos función para mostrar segunda pantalla válida.
function abrir(){
  document.getElementById("abrir").style.display="block";
}

//Declaramos función para mostrar segunda pantalla inválida.
function abrirx(){
  document.getElementById("abrirx").style.display="block";
}

//Declaramos función para cerrar segunda pantalla válida.
function cerrar(){
  document.getElementById("abrir").style.display="none";
}

//Declaramos función para cerrar segunda pantalla inválida.
function cerrarx(){
  document.getElementById("abrirx").style.display="none";
}

//export default isValidCard();