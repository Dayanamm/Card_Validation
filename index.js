//Implementar política de datos.
alert("Acepto la política para el Tratamiento de Protección de Datos Personales de acuerdo con la Ley Estatutaria 1581 de 2012.");

//Implementamos preventDefault para evitar que recargue la página y no lea nuestra función. 
addEventListener("submit", function(event){
event.preventDefault()
});

//Declaramos función para traer el dato.
function mostrar(){
  var id = document.getElementById('identificacion').value;
  //console.log ("Datos", id)  

//Sólo debe ser números.
  if(id === null || (isNaN(id))===true){
    document.getElementById('error').innerHTML = '*Debes ingresar números'
  }
  else if(id.match(/[^0-9-\s\g]+/)) {
  document.getElementById('espacio').innerHTML = '*No debes dejar espacios.'
  }
  else{
    document.getElementById('espacio').innerHTML = ' '
  }
}

//import isValidCard() from './validator.js';
