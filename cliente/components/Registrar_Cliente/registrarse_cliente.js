
var date = new Date();

var data = {
  name : document.getElementById('userName').value,
  userID : document.getElementById('userID').value,
  birthDate : document.getElementById('birthDate').value,
  phoneNumber : document.getElementById('phoneNumber').value,
  email : document.getElementById('email').value
};

function sendUserInfo(){
  if(valiteBlanks(data) == true & verifyAge() == true){
    fetch('/personas', {
      method: 'POST',
      body: JSON.stringify(data), 
      headers:{'Content-Type': 'application/json'}
    })
    .then(function(req, res){
      console.log(req.body)
    })
  }
}


function verifyAge(){
  if((data.birthDate - date.getDate) >=18 ){
    return true
  }else{
    return false
  }
}

function clearInputFields(){
  document.getElementById("login-form").reset(); 
}

function init(){
  clearInputFields();
}


init();




