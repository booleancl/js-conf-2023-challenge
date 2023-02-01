var presenters_sample = [
  { id: 1,  name: 'Gonzalo Fernandez', type: 'national', country: 'Chile', topics: ['engineering', 'technologies', 'programming-languages'] },
  { id: 2,  name: 'Miguel Angel Durán', type: 'international', country: 'Spain', topics: ['javascript', 'programming-languages'] },
  { id: 3,  name: 'Charlie Gerard', type: 'international', country: 'USA', topics: ['engineering', 'technologies', 'telecommunications'] },
  { id: 4,  name: 'Osman Cea', type: 'national', country: 'Chile', topics: ['team-engineering', 'javascript']},
]

function filterByType() {
  /*
    Los arreglos en javascript son objetos que tienen métodos como .filter, .forEach, .map, etc. 
    Estos métodos reciben callbacks como parámetros.
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods

    DESAFÍO 1: Utilizando el método .filter() de los Arrays calcula los items que contengan la propiedad "type" con el valor "national" del array "presenters_sample"
  */

  var nationalPresenters = [] //<-- ACÁ TU SOLUCIÓN: reemplaza el valor "[]" por la solución

  return nationalPresenters
}

/*
  2 - DESAFÍO PARA LOS ESTUDIANTES
  Utilizando los métodos .map() y .filter() respectivamente calcula:

  Una lista con los mismos elementos pero cada uno de los elementos NO debe tener la propiedad "topics"
*/
function getLists() {
  return {
    presenters_without_topics: [],
    presenters_with_javascript_topics: [],
  }
}

module.exports = {
  filterByType: filterByType,
  getLists: getLists
}
