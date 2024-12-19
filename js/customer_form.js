let inputFields = [
    'customer_name_input',
    'customer_age_input',
    'customer_street_inputt',
    'customer_streetNo_input',
    'customer_areaCode_input',
    'customer_city_input',
]

function openNewCustomerForm() {
    document.querySelector(".form_ctn_person").style.bottom = "0"; 
    snowflakes.forEach(snowflake => {
        snowflake.style.display = "block";
    })
    document.querySelector("#addCustomerForm").style.display = "block"; 
    clearNewCustomerForm()
}

function clearNewCustomerForm() {
    clearErrorMessages();
    clearInputFields();
}

function clearErrorMessages() {
    document.getElementById('customer_name_input_error').style.visibility = "hidden";
    document.getElementById('customer_age_input_error').style.visibility = "hidden"
    document.getElementById('customer_street_input_error').style.visibility = "hidden"
    document.getElementById('customer_streetNo_input_error').style.visibility = "hidden"
    document.getElementById('customer_areaCode_input_error').style.visibility = "hidden"
    document.getElementById('customer_city_input_error').style.visibility = "hidden"
}

function clearInputFields() {
    document.getElementById('customer_name_input').value = "";
    document.getElementById('customer_age_input').value = "";
    document.getElementById('customer_street_input').value = "";
    document.getElementById('customer_streetNo_input').value = "";
    document.getElementById('customer_areaCode_input').value = "";
    document.getElementById('customer_city_input').value = "";
}

function closeNewCustomerForm() {
    document.querySelector(".form_ctn_person").style.bottom = "100%"; 
    snowflakes.forEach(snowflake => {
        snowflake.style.display = "none";
    })
    document.querySelector("#addCustomerForm").style.display = "none"; 
}

function checkFormInput() {
    let inputError = false;
    checkInputName(inputError);
}

function checkInputName(inputError) {
    let inputElement = document.getElementById('customer_name_input');
    let errorElement = document.getElementById('customer_name_input_error');
    let inputValue = inputElement.value.trim(); // Entfernt führende und nachgestellte Leerzeichen
    // Überprüfung, ob das Eingabefeld leer ist
    if (inputValue === '') {
        errorElement.textContent = "Fill out, please.";
        errorElement.style.visibility = "visible";
        inputError = true;
        // return inputError;
    } 
    // Überprüfung auf ungültige Zeichen (nicht Buchstaben oder Leerzeichen)
    else if (!/^[a-zA-Z\s]+$/.test(inputValue)) {
        errorElement.textContent = "Only letters, ' ' and '-'.";
        errorElement.style.visibility = "visible";
        inputError = true;
        // return inputError;

    } 
    // Keine Fehler
    else {
        errorElement.style.visibility = "hidden";
    }
    inputError = inputError
    checkInputAge(inputError);
}

function checkInputAge(inputError) {
    let inputElement = document.getElementById('customer_age_input');
    let errorElement = document.getElementById('customer_age_input_error');
    let inputValue = inputElement.value.trim(); // Entfernt unnötige Leerzeichen
    // Überprüfung, ob der Wert eine Zahl ist und im Bereich 3-99 liegt
    if (!/^\d+$/.test(inputValue)) {
        errorElement.textContent = "Fill out, please.";
        errorElement.style.visibility = "visible";
        inputError = true;
        // return inputError;

    } else {
        let age = parseInt(inputValue, 10);
        if (age < 3 || age > 99) {
            errorElement.textContent = "Age between 3 and 99.";
            errorElement.style.visibility = "visible";
            inputError = true;
            // return inputError;

        } else {
            errorElement.style.visibility = "hidden";
        }
    }
    inputError = inputError;
    checkInputStreet(inputError);
}

function checkInputStreet(inputError) {
    let inputElement = document.getElementById('customer_street_input');
    let errorElement = document.getElementById('customer_street_input_error');
    let inputValue = inputElement.value.trim(); // Entfernt unnötige Leerzeichen
    // Überprüfung, ob das Feld leer ist
    if (inputValue === '') {
        errorElement.textContent = "Fill out, please.";
        errorElement.style.visibility = "visible";
        inputError = true;
        // return inputError;
    } 
    // Überprüfung, ob der Wert nur Buchstaben, Leerzeichen und Bindestriche enthält
    else if (!/^[a-zA-ZäöüßÄÖÜ\s-]+$/.test(inputValue)) {
        errorElement.textContent = "Only letters, ' ' and '-'.";
        errorElement.style.visibility = "visible";
        inputError = true;
        // return inputError;
    } else {
        errorElement.style.visibility = "hidden";
        inputError = false; // Setze den Fehlerstatus zurück, wenn die Eingabe gültig ist
    }
    inputError = inputError;
    checkInputStreetNumber(inputError);
}

function checkInputStreetNumber(inputError) {
    let inputElement = document.getElementById('customer_streetNo_input');
    let errorElement = document.getElementById('customer_streetNo_input_error');
    let inputValue = inputElement.value.trim(); // Entfernt unnötige Leerzeichen
    // Überprüfung, ob der Wert eine Zahl ist und >= 1
    if (!/^\d+$/.test(inputValue)) {
        errorElement.textContent = "Fill out, please.";
        errorElement.style.visibility = "visible";
        inputError = true;
        // return inputError;
    } else {
        let number = parseInt(inputValue, 10);
        if (number < 1) {
            errorElement.textContent = "At least one digit bigger than 0.";
            errorElement.style.visibility = "visible";
            inputError = true;
            // return inputError;

        } else {
            errorElement.style.visibility = "hidden";
        }
    }
    inputError = inputError;
    checkInputAreaCode(inputError);
}

function checkInputAreaCode(inputError) {
    let inputElement = document.getElementById('customer_areaCode_input');
    let errorElement = document.getElementById('customer_areaCode_input_error');
    let inputValue = inputElement.value.trim(); // Entfernt unnötige Leerzeichen

    // Überprüfung, ob das Feld leer ist
    if (inputValue === '') {
        errorElement.textContent = "Fill out, please.";
        errorElement.style.visibility = "visible";
        inputError = true;
    } 
    // Überprüfung, ob der Wert aus mindestens zwei Ziffern besteht
    else if (!/^\d{2,}$/.test(inputValue)) {
        errorElement.textContent = "At least two digits.";
        errorElement.style.visibility = "visible";
        inputError = true;
    } else {
        errorElement.style.visibility = "hidden";
    }
    inputError = inputError;
    checkInputCity(inputError);
}


function checkInputCity(inputError) {
    let inputElement = document.getElementById('customer_city_input');
    let errorElement = document.getElementById('customer_city_input_error');
    let inputValue = inputElement.value.trim(); // Entfernt unnötige Leerzeichen
    // Überprüfung, ob das Feld leer ist
    if (inputValue === '') {
        errorElement.textContent = "Fill out, please.";
        errorElement.style.visibility = "visible";
        inputError = true;
    } 
    // Überprüfung, ob der Wert nur Buchstaben, Leerzeichen und Bindestriche enthält
    else if (!/^[a-zA-ZäöüßÄÖÜ\s-]+$/.test(inputValue)) {
        errorElement.textContent = "Only letters, ' ' and '-'.";
        errorElement.style.visibility = "visible";
        inputError = true;
    } else {
        errorElement.style.visibility = "hidden";
    }
    
    inputError = inputError;
    console.log(inputError);
    if (inputError == false) {
        console.log(inputError);
        collectData(inputError);
    }
    
}

async function collectData(inputError) {
    let newCustomer = {
        'id' : `${dataBase.customerID}`,
        'name' : `${document.getElementById('customer_name_input').value.trim()}`,
        'age' : `${document.getElementById('customer_age_input').value.trim()}`,
        'street' : `${document.getElementById('customer_street_input').value.trim()}`,
        'streetNo' : `${document.getElementById('customer_streetNo_input').value.trim()}`,
        'areaCode' : `${document.getElementById('customer_areaCode_input').value.trim()}`,
        'city' : `${document.getElementById('customer_city_input').value.trim()}`,
        'wishes' : {}
    }
    console.log(newCustomer);
    await postNewCustomer(path="allCustomer", data=newCustomer);
    dataBase.customerID++;
    console.log(dataBase.customerID);
    await putNewCustomerID(path="customerID", data=dataBase.customerID);
    await getIdAndCustomer(pathData='');
    console.log(dataBase);
    
}