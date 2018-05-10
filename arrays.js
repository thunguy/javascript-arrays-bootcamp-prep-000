var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles",
  ]
  
  function addElementToBeginningOfArray(array, element) {
    return [element, ...array]
  }
  
   function addElementToEndOfArray(array, element) {
    return [...array, element]
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
    return [element, 1]
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element); {
      return array
    }
  }
  
  function destructivelyAddElementToEndOfArray(array, element) {
    return [1, element]
  }
  
  function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element); {
      return array
    }
  }
  
  function accessElementInArray (array, index) {
    return array[index]
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(array) {
    return array.shift();
  }
  
  function removeElementFromBeginningOfArray (array) {
    return array.slice();
  }
  
  function destructivelyRemoveElementFromEndOfArray (array) {
    return array.pop();
  }
  
  function removeElementFromEndOfArray(array) {
    return array.slice()
  }
  
  
  

  
  
  
  

  
  