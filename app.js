const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const studentNumber = document.getElementById('sno');
const barCode = document.getElementById('barCode');
const issTill = document.getElementById('issTill');
const issDate = document.getElementById('issDate');
const mobileNumber = document.getElementById('pno');

form.addEventListener('submit', e => {
	e.preventDefault();
  checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const sNumberValue = studentNumber.value.trim();
	const barCodeValue = barCode.value.trim();
  const pnoValue = mobileNumber.value.trim();

  let usName,emailId,snum,bar,iss,isst,pno;
	
	if(usernameValue === '') {
		setErrorFor(username, 'Student name cannot be blank');
	} else {
		setSuccessFor(username);
    usName=true;
	}

  if(!issDate.value){
    setErrorFor(issDate,'This date cannot be blank')
  }
  else{
    setSuccessFor(issDate);
    iss=true;
  }
	
  if(!issTill.value){
    setErrorFor(issTill,'This date cannot be blank')
  }
  else{
    setSuccessFor(issTill);
    isst=true;
  }
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
    emailId=true;
	}

  if(pnoValue === ''){
    console.log('if');
    setErrorFor(mobileNumber,'Student number cannot be blank');
  }else if(!isMNumber(pnoValue)){
    console.log('else if');
    setErrorFor(mobileNumber,'Enter a valid mobile number');
  }else{
    setSuccessFor(mobileNumber);
    pno=true;
  }
	
	if(sNumberValue === '') {
		setErrorFor(studentNumber, 'Student number cannot be blank');
	}else if(!isSNo(sNumberValue)){
    setErrorFor(studentNumber,'Enter a valid student number');
  }
   else {
		setSuccessFor(studentNumber);
    snum=true;
	}
	
	if(barCodeValue === '') {
		setErrorFor(barCode, 'Book bar code cannot be blank');
	} else if(!isValidBar(barCodeValue)) {
		setErrorFor(barCode, 'Please enter a valid bar code number');
	} else{
		setSuccessFor(barCode);
    bar=true;
	}

  if(usName&&emailId&&snum&&bar&&iss&&isst&&pno){
    const inputs = document.querySelectorAll('#sno, #username, #pno, #email, #barCode, #issDate, #issTill');

    inputs.forEach(input => {
      input.value = '';
    });
    alert("Form Submitted successfully");
  }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isMNumber(mobileNumber){
  console.log('isMnumber');
  return /^\+91\d{10}$/.test(mobileNumber);
}

function isSNo(sNumberValue){
  return /^[0-9]{7}$/.test(sNumberValue);
}

function isValidBar(barCodeValue){
  return /^[A-Z0-9]{5,10}$/.test(barCodeValue);
}