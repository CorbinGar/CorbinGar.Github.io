






var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");





button.addEventListener("click", function(){


  var input1 = textbox.value
  var input2 = textbox2.value
  input1 = input1.toUpperCase();
  input2 = input2.toUpperCase();


  if (ValidateLegality2(input1, input2)) {

    window.alert("legal");
    var newMessage = document.createElement("li");
    newMessage.innerHTML = input1 + input2;
    messages.appendChild(newMessage);
    textbox.value = "";
    textbox2.value = "";

  }else{
    window.alert("not legal");
  }







   




});
 


function ValidateLegality2(userChoice, userChoice2){

  var legality = false

  if(ValidateLegality(userChoice) && ValidateLegality(userChoice2)){
    if(userChoice == userChoice2){
        var legality = false
        window.alert("you cannot enter the same value twice");
      }else{
        var legality = true
      }
  }
  return legality
}


function ValidateLegality(onechoice){
  var legality = false

  if (
      (onechoice === "P") || 
      (onechoice === "M") || 
      (onechoice === "E") || 
      (onechoice === "A")
    ){
      var legality = true
    }else {
      var legality = false
      window.alert(onechoice + " is not a valid value");
    }

  return legality
}


