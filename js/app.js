const openForm = document.getElementById('form-submit');
const form = document.getElementById('contact-form');
const inputName = document.getElementById('typeText');
const inputEmail = document.getElementById('typeEmail');
const textArea = document.getElementById('textAreaExample');
const formCheck = document.getElementById('flexCheckDefault');
const submitform = document.getElementById('formSend');
const cancelForm = document.getElementById('cancel-form');
const contact = document.querySelector('.contact-info');
const loading = document.getElementById('loading');






document.getElementById('form-submit').onclick = function() {
    document.querySelector('.contact-info').style.display = 'none';
    document.getElementById('contact-form').style.display = "block";
    
    
    
}



document.getElementById('cancel-form').onclick = function() {
    document.getElementById('contact-form').style.display = 'none';
    document.querySelector('.contact-info').style.display = 'block';
    
}


form.addEventListener('submit', (e)=> {

    
    
    let messages = [];

    if(inputName.value === '' || inputName.value == null) {
        messages.push('Your name is required')
    }

    if(inputEmail.value === '' || inputEmail.value == null) {
        messages.push('Your email is required')
    }
    if(textArea.value === '') {
        messages.push('Please write us a message')
        alert('Please write us a message')
    }

    if(formCheck.checked) {
        document.getElementById('loading').style.display = 'block'
        setTimeout(loading,2000);
        confirm('Vous etes maintenant inscrit a notre liste de diffusion');
    } else{
        e.preventDefault()
        alert('Please check box')
    }
    if(messages.length > 0) {
        e.preventDefault()
    }
    
    
})




