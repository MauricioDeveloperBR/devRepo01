/*
*   Author: Maurício Ferreira
    Date: 2022/06/08
*
*/


var btn = document.querySelector('.form--button');

btn.addEventListener("click", function(event){
	event.preventDefault();
	trigger();
}, false);



function degree(){

	const degree = document.querySelector('#number_field');
	const result = parseInt(degree.value, 10);
	return result	
}

function type(){

	const type = document.querySelector('select');
	const result = type.value;
	return result
}

function convert(){
	
	let number_degree = degree();
	let type_option = type();

	if(type_option === "Celsius"){
		let f_convert = Math.round(number_degree * 1.8 + 32);
		return [f_convert, 'Fahrenheit']
	}else{
		let c_convert = Math.round((number_degree - 32) / (9 / 5));
		return [c_convert, 'Celsius']
	}
}

function displayResult(){

	const display = convert();
	let space_result = document.querySelector(".container--paragraph-show");
	
	if(display[1] === 'Celsius'){
		space_result.innerHTML = '°C ' + display[0];
	}else{
		space_result.innerHTML = '°F  ' + display[0];
	}
}


//function to call all of others

function trigger(){
	let verifyEmptyField = degree();

	if(Number.isNaN(verifyEmptyField)) {
		window.alert('Fill the Degree Field')
	}else{
		degree();
		type();
		convert();
		displayResult();

	}
		
}
