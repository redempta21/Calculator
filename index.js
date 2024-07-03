const result = document.getElementById("result");
window.onload = function() {
   var resultField = document.getElementById("result");
    if(localStorage.getItem('calculatorResult')) {
      var storedResult = localStorage.getItem('calculatorResult');
      resultField.value = storedResult;
      console.log('Value in local storage:', storedResult);
    }
  };
  

function opendTodisplay(input){
result.value += input;

}
function clearDisplay(){
    result.value = "";
  
 
}
function calculate(){
    try{
        var resultField = document.getElementById("result");
        var result = eval(resultField.value);
        resultField.value = result;
   localStorage.setItem("calculatorResult", resultField.value);
   console.log("result saved to local storage:", result);
} 
catch(error){
    resultField.value = ( "Error in calculation");
}

}


