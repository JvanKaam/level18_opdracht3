//A
const addTheWordCool = function(array){
    array.push("cool");
    return array;
}

console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));



//B
const amountOfElementsInArray = function(array) {
    return array.length;
}

console.log(amountOfElementsInArray(["appels", "peren", "citroenen"]));



//C
const selectBelgiumFromBenelux = function(array) {
    return array[0];
}

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 




//D
const lastElementInArray = function(array){
    return array[array.length - 1];
}

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 


//E
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
const impeachTrumpSlice = function(array) {
    return array.slice(1)
}
const impeachTrumpSplice = function(array) {
    return array.splice(1)
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

//console.log(presidents);
//slice removes the object from the array, splice makes a new array

//slice makes a new array where the sliced is removed
//splice removes the other 3 from the array and only trump remains


//F
const stringsTogether = function(array) {
    return array.join(" ");
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
//resultaat: "Winc Academy is leuk ;-}"


//G
const combineArrays = function (array1, array2){
    return array1.concat(array2);
}

console.log(combineArrays([1,2,3], [4,5,6])); 
// resultaat: [1,2,3,4,5,6]
