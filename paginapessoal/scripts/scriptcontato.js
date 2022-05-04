// const checkForm = {
//     productName: false,
//     productDescription: false,
//     productPrice: false,
//     urlProductImage: false,
// }

document.getElementById('inputName').addEventListener('input', function (e) {
    //console.log(checkForm);
    const inputName = e.target.value;
    if (inputName.length > 50 || inputName.length < 1) {
        console.log('O nome do produto deve ter no máximo 50 caracteres');
        document.getElementById('name-error').style.display = "block";
        checkForm.inputName = false;
    } else {
        document.getElementById('name-error').style.display = "none";
        checkForm.inputName = true;
    }
    enableButton();
});


 document.getElementById('inputEmail').addEventListener('input', function (e) {
    const inputEmail = e.target.value;

    if (validEmail(inputEmail)) {
        document.getElementById('email-error').style.display = 'block';
        checkForm.inputEmail = false;
    } else {
        document.getElementById('email-error').style.display = 'none';
        checkForm.inputEmail = true;
    }
    enableButton();
});

 document.getElementById('inputphone').addEventListener('input', function (e) {
     console.log('Monitorando o telefone');
     const inputphone = e.target.value;
     if (isNaN(inputphone)) {
         document.getElementById('phone-error').style.display = 'block';
         checkForm.inputphone = false;
     } else {
         document.getElementById('phone-error').style.display = 'none';
         checkForm.inputphone = true;
     }
     enableButton();
 });

 document.getElementById('textareaMessage').addEventListener('input', function (e) {
    //console.log(checkForm);
    const textareaMessage = e.target.value;
    if (textareaMessage.length > 200 || textareaMessage.length < 1) {
        console.log('A descrição deve ter entre 0 e 200 caracteres.');
        document.getElementById('message-error').style.display = "block";
        checkForm.textareaMessage = false;
    } else {
        document.getElementById('message-error').style.display = "none";
        checkForm.textareaMessage = true;
    }
    enableButton();
});


function validEmail(str) {
    let pattern = new RegExp('^[^@]+@[^@]+\.[^@]+');
    return !pattern.test(str);
}


// function enableButton() {
//     const butcad = document.getElementById("butcad");
//     if (checkForm.productName &&
//         checkForm.productDescription &&
//         checkForm.productPrice &&
//         checkForm.urlProductImage) {
//         butcad.disabled = false;
//     } else {
//         butcad.disabled = true;
//     }
// }