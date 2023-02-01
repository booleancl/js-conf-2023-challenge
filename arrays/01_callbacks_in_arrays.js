/*
  1 - Función map
  Crea una función que delegue la responsabilidad de modificar todos los elementos de un arreglo

  // map debe devolver un arreglo con los valores modificados
  map(pointsList, modifyValue)
*/
function map(array, callback){
  var arrayLength = array.length;
	var newArray = [];

	for (var index = 0; index < arrayLength; index++) {
    // ACÁ UTILIZAMOS EL CALLBACK
  }
  return newArray;
}

module.exports = {
  map: map
}
