// when the user click a button, invoke the function display and 
// passing the value of button as agruments to the function and 
// stores the value of each button in the calculator.answer.value.


function display(btn){
	calculator.answer.value += btn;
}
// create a clear function
function btnclear(btn){
	calculator.answer.value = "";
}
// create a backspace function
function btndelete(){
	
	 calculator.answer.value= calculator.answer.value.slice(0,-1);

	 // slice() extracts a part of a string and returns the extracted 
	 // part in a new string.
  //    The method takes 2 parameters: the starting index (position), 
  //    and the ending index (position).
  //    This example slices out a portion of a string from position 
  //    7 to position 13:
  //    If a parameter is negative, the position is counted from the
  //     end of the string. 
}

// create a square root function
function square(btn){
calculator.answer.value = Math.sqrt(calculator.answer.value);
}
