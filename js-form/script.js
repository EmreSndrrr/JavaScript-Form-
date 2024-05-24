const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const phone = document.getElementById('phone');

function error(input, message){
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText =message;
    div.className ='invalid-feedback';
}
function success(input){
    input.className = 'form-control is-valid'
}
const checkEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value === ''){
            error(input,`${input.id} gerekli`);
        }else{
            success(input);
        }
    })
    
  }

function checkLength(input, min, max){
    if(input.value.length < min ){
        error(input, `${input.id} en az ${min} karakter olmalıdır`);

    }else if (input.value.length > max){
        error(input, `${input.id} en fazla ${max} karakter olmalıdır`);

    }else{
        success(input);
    }
}
function checkPassword(input1, input2){
    if(input1.value != input2.value){
        error(input2 , 'Parolalar aynı olmalıdır.')
    }
    else if(input1.value =='' || input2.value ==''){
        error(input1,'parola boş olamaz')
    }
    else{
        success(input1);
        success(input2);

    }
}

function checkPhone(input){
    var exp = /^\d{10}$/;
    if(!exp.test(input.value)){
        error(input, 'Telefon numarası geçersiz');
    }
    
    else{
        success(phone)
    }
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username,email,password,repassword]);
    checkLength(username,7,15);
    checkLength(password,7,12);
    checkLength(repassword,7,12);
    checkPassword(password,repassword);
    checkPhone(phone);


    // if(username.value === ''){
    //     error(username, 'Kullanıcı adı girmek zorunlu');
    // }else{
    //     success(username);
    // }
    // if(email.value === ''){
    //     error(email,'email girmek zorunlu');
    // }
    // else if(!validateEmail(email.value)){
    //     error(email,'Duzgun bir mail adres giriniz!')
    // }
    // else{
    //     success(email);
    // }
    // if(password.value === ''){
    //     error(password, 'sifre girmek zorunlu');
    // }else{
    //     success(password);
    // }
    // if(repassword.value === ''){
    //     error(repassword, 'sifre girmek zorunlu');
    // }else{
    //     success(repassword);
    // }
});