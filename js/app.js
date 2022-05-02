const openForm = document.getElementById('form-submit');
const form = document.getElementById('contact-form');
const inputName = document.getElementById('typeText');
const inputEmail = document.getElementById('typeEmail');
const textarea = document.getElementById('textAreaExample');
const formCheck = document.getElementById('checkbox');
const submitform = document.getElementById('formSend');
const cancelForm = document.getElementById('cancel-form')
const contact = document.querySelector('.contact-info')

document.getElementById('form-submit').onclick = function() {
    document.querySelector('.contact-info').style.display = 'none';
    document.getElementById('contact-form').style.display = "block";
    
}

document.getElementById('cancel-form').onclick = function() {
    document.getElementById('contact-form').style.display = 'none';
    document.querySelector('.contact-info').style.display = 'block';
}


form.addEventListener('submit', infoSent,);


function infoSent(e) {
    if(inputName.value === '' || inputEmail.value === '' ) {
        alert('Please fill in all the fields');
    } else{
        JSON.parse(localStorage.submitform('contact-form'))
    }
    e.preventDefault()

}




