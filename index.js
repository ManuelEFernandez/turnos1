const form = document.getElementById("form");
const cardsContainer = document.getElementById("muestra-turnos");
const nameInput = document.getElementById("name");
// const botonReseteo = document.getElementById("reseteo");
let agenda = JSON.parse(localStorage.getItem("agenda")) || [];
// resetearAgenda = () => {

//     agenda = [];
//     localStorage.setItem("agenda", JSON.stringify(agenda));
// }

// botonReseteo.addEventListener("click", resetearAgenda());





const saveData = () => {

    agenda = [...agenda, 
    {
        id: agenda.length + 1,
        name: nameInput.value,
        lastName: lastNameInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
        date: formatDate(dateInput.value),
        time: hourInput.value,
        quantity: getRadioValue(radioInput),
        extras: getCheckedOptions(checkboxInput),
        about: aboutInput.value,
       
        
    },

];
};

const saveToLocalStorage = () => {

    localStorage.setItem("agenda", JSON.stringify(agenda));
}

const submitForm = (e) => {

    e.preventDefault();


        if (isValidForm()) {
        saveData();
        alert("El turno se ha creado correctamente");
        saveToLocalStorage();
   

    form.reset();
    setDateIntervals();
    renderAgenda();
    cargaTurnos.classList.remove("carga-turnos2");
}
}

let setCardBackground = (quantity) => {

    if (quantity === "Menos de 5 personas") {

        return "fondo-negro";
    }

    if (quantity === "Entre 5 y 10 personas") {

        return "fondo-verde";
    }

    else {

        return "fondo-azul";
    }
}


const renderTurn = (turno) => {

   
    
    const {id, name, lastName, phone, email, date, time, quantity, extras} = turno;

    const objetoRaro = [];
    objetoRaro.menos5 = "Menos de 5 personas";
    objetoRaro["510"] = "Entre 5 y 10 personas";
    objetoRaro.mas10 = "Más de 10 personas"
    return `<div class="carta ${setCardBackground(objetoRaro[quantity])}">
    <div class="card-left">
   
        <h2 class="card-title">
            Turno n°${id} - ${name} ${lastName}
        </h2>
 <div class="datos">
        <p class="card-qty">${objetoRaro[quantity]}</p>
        <p class="card-extras">${extras}</p>
        </div>
        <div class="tags">
            <span class="card-hour ${setTimeBackground(quantity)}">${time}</span>
            <span class="card-date ${setDateBackground(quantity)}">${date}</span>
        </div>
    </div>
    <div class="card-right">
        <div class="contacto">
            <i class="fa-solid fa-envelope"></i>
            <i class="fa-solid fa-phone"></i>
            
        </div>
    
    </div>
</div>`;
   

};

const renderAgenda = () => {

    cardsContainer.innerHTML = agenda.map(turno => renderTurn(turno)).join("");
    
};




const init = () => {
    window.addEventListener("DOMContentLoaded", setDateIntervals);

    form.addEventListener("submit", submitForm);

    renderAgenda();

}


init();