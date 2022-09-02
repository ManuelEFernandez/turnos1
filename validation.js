

const lastNameInput = document.getElementById("apellido");
const hourInput = document.getElementById("hour");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const radioInput = document.querySelectorAll("input[name='quantity']");
const checkboxInput = document.querySelectorAll("input[type='checkbox']");
const aboutInput = document.getElementById("mensaje");



let cargaTurnos = document.querySelector(".carga-turnos");

// form.addEventListener("input", (e) => {


//     switch (e.target.id) {

//     case "name":
//         checkName();
//         break;

//     case "apellido":
//         checkName();
//         break;

//     case "email":
//             checkEmail();
//             break;
    
//      case "phone":
//         checkPhone();
//         break;


//     }

// });


const isEmpty = (valor) =>  valor === "" ? true : false;


const checkDate = () => {

    let valid = false;
    const dateValue = dateInput.value;

    if(!isValidDate(dateValue)) {

        showError(dateInput, "La fecha no es válida") 
    }

    else {

        clearError(dateInput);
        valid = true;
    }

    return valid;
}

const isValidDate = (date) => {

    const fechaDeHoy = new Date();
    const fechaDeTurno = new Date(date);

    return date.length && fechaDeHoy < fechaDeTurno;

}
 
const checkEmail = () => {

    let valid = false;
    const emailValue = emailInput.value.trim();

    if (isEmpty(emailValue)) {

        showError(emailInput, "Este campo es requerido")
    }

    else if(!isEmailValid(emailValue)) {

        showError(emailInput, "El email no es válido");
    }

    else {

        clearError(emailInput);
        valid = true;
    }

    return valid;
}


const checkTextInput = (input) => {

    let valid = false;
    const content = input.value.trim();
   
    if (isEmpty(content)) {

        showError(input, "Este campo es requerido");
        
    }

    else {

        clearError(input);
        valid = true; 
        
    }

    return valid;
};

const isEmailValid = (email) => {

    const emailRegEx = /^\S+@\S+\.\S+$/;
    
    return emailRegEx.test(email);
}


const checkPhone = () => {

    let valid = false;
    const phoneValue = phoneInput.value.trim();

    if (!isPhoneValid(phoneValue)) {

        showError(phoneInput, "El número no es válido")
    }

    else {

        clearError(phoneInput);
        valid = true;

    }

    return valid;
}
const isPhoneValid = (phone) => {

    const phoneRegEx = /^[0-9]{10}$/;
    
    return phoneRegEx.test(phone);
}

const showError = (input, message) => {

    
    
    const formField = input.parentElement;
    formField.classList.add("error");
    cargaTurnos.classList.add("carga-turnos2");
    const error = formField.querySelector("small");
    error.textContent = message;
    

}

const clearError = (input, message) => {

   
    const formField = input.parentElement;
    formField.classList.remove("error");
    const error = formField.querySelector("small");
    error.textContent = "";
  

}
 
// const checkName = (nombre) => {

//     if (!nombre) {

//         smallNombre.textContent = "Hola";

//     }

//     else {

//         return;
//     }
 
// }

const isValidForm = () => {

    const isValidName = checkTextInput(nameInput);
    const isValidLastName = checkTextInput(lastNameInput);
    const isValidPhone = checkPhone();
    const isValidEmail = checkEmail();
    const isValidDate = checkDate();

    return (isValidName && isValidLastName && isValidPhone && isValidEmail && isValidDate);

};