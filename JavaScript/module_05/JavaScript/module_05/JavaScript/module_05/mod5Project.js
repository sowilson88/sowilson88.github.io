function displayData()
{
  var fName = document.getElementById("fNameInput").value;
  var lName = document.getElementById("lNameInput").value;
  var address = document.getElementById("addressInput").value;
  var city = document.getElementById("cityInput").value;
  var state = document.getElementById("stateInput").value;

  var nameOutput = "hello, " + fName + " " + lName + ".";
  var addressOutput = "The address you enterd is: " + address + " " + city + ", " + state + ".";



  document.getElementById("nameOutput").innerHTML = nameOutput;
  document.getElementById("addressOutput").innerHTML = addressOutput;
}
