const dateInput = document.getElementById("date");
const setDateIntervals = () => {

    dateInput.value = getTomorrowDate();
    dateInput.min = getTomorrowDate();
    dateInput.max = getNextDay().getFullYear() + "-12-31";
}


const twoDigits = (numero) => numero.toString().padStart(2, "0");

const getTomorrowDate = () => {

    const year = getNextDay().getFullYear();
    const day = getNextDay().getDate();
    const month = getNextDay().getMonth() + 1;

    return `${year}-${twoDigits(month)}-${twoDigits(day)}`
}

const getNextDay = () => {

    let tomorrow = new Date();

    tomorrow.setDate(tomorrow.getDate() + 1);

    return tomorrow;
}



// const setCardBackground = (quantity) => {

//     return quantity === "mas10" ? "fondo-azul" :
//     quantity === "510" ? "fondo-verde":
//     "fondo-negro";
// };

const setTimeBackground = (quantity) => {

    return quantity === "menos5" ? "green-card" : "grey-card";
};

const setDateBackground = (quantity) => {
    return quantity === "menos5" ? "violet-card-white" : "violet-card";
};


const getRadioValue = (inputs) => {

    const checkedInput = [...inputs].find(input => input.checked)

    return checkedInput.value;
    
}

const getCheckedOptions = (inputs) => {

    const checkedOptions = [...inputs].filter(input => input.checked).map((option) => option.value).join(" / ");

    return checkedOptions;
}

const formatDate = (date) => {

    const splitDate = date.split("-").reverse().join("/");
    return splitDate;
};

