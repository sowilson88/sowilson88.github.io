function reverseString(str)
{
  //Use split to split the string
  var splitString = str.split("");

  //use the reverse method on the newly split string
  var reverseStr = splitString.reverse();

  //use join to put all of the individual elements back together
  var joined = reverseStr.join("");

  //return the reversed string
  return joined;
}

var outPut = reverseString("Oswald Copperpot");

console.log("Original String: Oswald Copperpot");
console.log(`Reversed String: ${outPut}`);
