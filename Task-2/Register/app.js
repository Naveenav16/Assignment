const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password1');
const phoneId = document.getElementById('phone');
const address = document.getElementById('area');
const birth=document.getElementById('birthday');
const gender=document.getElementById('materialUnchecked');
const gen=document.getElementById('gender');
const err=document.getElementById('feedback');
const drp=document.getElementById('drop');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();

});

function checkInputs() {
	// trim to remove the whitespaces
    var firstValue = firstname.value.trim();
    var lastValue = lastname.value.trim();
    var emailValue = email.value.trim();
    var phoneValue = phoneId.value.trim();
	var passwordValue = password.value.trim();
    var password2Value = password2.value.trim();
    var addressValue = address.value.trim();
	var birthValue = birth.value.trim();


	
	if(firstValue === '') {
		setErrorFor(firstname, 'Username cannot be blank');
	} else {
		setSuccessFor(firstname);
    }
    if(lastValue === '') {
		setErrorFor(lastname, 'Username cannot be blank');
	} else {
		setSuccessFor(lastname);
    }
    
    if(addressValue === '') {
		setErrorFor(address, 'Username cannot be blank');
	} else {
		setSuccessFor(address);
	}
    
    if(birthValue === '') {
		setErrorFor(birth, 'Username cannot be blank');
	} else {
		setSuccessFor(birth);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
    

    if(phoneValue === '') {
		setErrorFor(phoneId, 'Username cannot be blank');
	} else {
		setSuccessFor(phoneId);
    }

    
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Password and Confirm password does not match');
	} else{
		setAllFor(password2);
	}
}

function setErrorFor(input,message) {
	const formControl = input;
	err.innerText=message;
	formControl.className = 'form-control is-invalid';

}

function setSuccessFor(input) {
	const formControl = input;
	formControl.className = 'form-control is-valid ';	
}
function setErrorForGender(input, message){
	const formControl=input;
}

function setAllFor(input){
	err.remove();
	gen.remove();
	drp.remove();
	const formControl = input;
	formControl.className = 'form-control is-valid';	
}

function display() {  
	if(document.getElementById('male').checked) { 
		
	} 
	else if(document.getElementById('female').checked) { 
	}  
	else { 
		document.getElementById("gender").innerHTML 
			= "Please Select Gender"; 
	} 
} 
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function Validate()
{
var e = document.getElementById("dropdown");
 var strUser = e.options[e.selectedIndex].value;
//if you need text to be compared then use
// var strUser1 = e.options[e.selectedIndex].text;
if(strUser==0) //for text use if(strUser1=="Select")
{
	document.getElementById("drop").innerHTML 
	= "Select any option"; 
}
}

function checkall(){
	var firstValue = firstname.value;
	var lastValue = lastname.value;
	var phoneValue = phoneId.value;
	var emailValue=email.value;
	var passwordValue = password.value;
    var password2Value = password2.value;
    var addressValue = address.value;
	var birthValue = birth.value;

	if(firstValue=='' || lastValue==''||phoneValue==''||emailValue==''||passwordValue==''||password2Value==''||addressValue==''||birthValue==''){
		toasterOptions();
	}else{
		toasterSuccess();
	}
}