var chocolateBars = ["snickers, hundred grand, kitkat, skittles"]

<<<<<<< HEAD
function addElementToBeginningOfArray(array, element) {
  var array2 = [element, ...array]
  return array2
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var array3 = [...array, element]
  return array3
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, element) {
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(1)
  return array
}

function removeElementFromBeginningOfArray(array, element) {
  array.slice(1)
  array4 = array.slice(1)
  return array4
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop(element)
  return array
}

function removeElementFromEndOfArray(array, element) {
  array.slice(0, array.length - 1)
  array5 = array.slice(0, array.length - 1)
  return array5
=======
function addElementToBeginningOfArray(chocolateBars) {
  ["crunch", ...chocolateBars]
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift("crunch")
  chocolateBars1 = chocolateBars.unshift("crunch")
  return chocolateBars1
}

function addElementToEndOfArray() {
  [...chocolateBars, "crunch"]
  return chocolateBars
}

function destructivelyAddElementToEndOfArray() {
  chocolateBars.push("crunch")
  return chocolateBars
}

function accessElementInArray() {
  return chocolateBars[2]
}

function destructivelyRemoveElementFromBeginningOfArray() {
  chocolateBars.shift(1)
  return chocolateBars
}

function removeElementFromBeginningOfArray() {
  chocolateBars.slice(1)
  cats = chocolateBars.slice(1)
  return cats
}

function destructivelyRemoveElementFromEndOfArray() {
  chocolateBars.pop()
  dogs = chocolateBars.pop()
  return dogs
}

function removeElementFromEndOfArray() {
  chocolateBars.slice(0, chocolateBars.length - 1)
  return chocolateBars
>>>>>>> 35deef81f789484c56536daf6b83ecd770f3d6a2
}