let checkNummber = prompt('Please enter check number');
let tip = prompt('Please enter tip percentage');
let tipAmount = 0;
let totalSum = 0;
let max = 100;
let s = 2;

if ( parseInt(checkNummber,10)>=0 && (parseInt(tip,10)>=0 && parseInt(tip,10)<= max)) {
	tipAmount = checkNummber*tip/max;
	totalSum = Number(checkNummber) + Number(tipAmount);
	alert( 'Check number: ' + checkNummber +
			'\nTip: ' + tip +
			'\nTip amount: ' + tipAmount.toFixed(s) + 
			'\nTotal sum to pay: ' + totalSum.toFixed(s) );
} else {
	alert('Invalid input data');
}

