let login = prompt('login');
let strLength = login.length;
let f = 4;
let t = 20;
let now = new Date();
let hour = now.getHours();
let message = '';

if (hour > t) {
	message = 'Good evening';
} else {
	message = 'Good day';
}
	
if (strLength===0) {
	alert('Canceled.');
} else if (strLength>0 && strLength < f) {
	alert('I don\'t know any users having name length less than 4 symbols');
} else if (login ==='User') {
	getPasswordUser(); 
} else if (login === 'Admin') {
	getPasswordAdmin();
} else {
	alert('I don’t know you');
}


function getPasswordAdmin () {
	let password = prompt('password');
	let pasLength = password.length;
	
	if (pasLength===0) {
		alert('Canceled.');
	} if (password==='RootPass') {
		alert(message +', dear Admin!');
	} else {
		alert('Wrong password');
	}
}

 function getPasswordUser () {
	let password = prompt('password');
	let pasLength = password.length;
	
	if (pasLength===0) {
		alert('Canceled.');
	} if (password==='UserPass') {
		alert(message +', dear User!');
	} else {
		alert('Wrong password');
	}
 }
 