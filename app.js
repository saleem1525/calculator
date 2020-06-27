function calculate(num) {
   var result = document.getElementById("result");
    result.value += num;
  }
  
  function clr() {
    var result = document.getElementById("result");
    result.value = ""
    
  }
  function res() {
    var result = document.getElementById("result");
    result.value = eval(result.value)
    
  }