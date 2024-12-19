let inputFields = [
    'customer_name_input',
    'customer_age_input',
    'customer_street_inputt',
    'customer_streetNo_input',
    'customer_areaCode_input',
    'customer_city_input',
]

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
        errorElement.textContent = "Name darf nicht leer sein.";
        errorElement.style.visibility = "visible";
        inputError = true;
    } 
    // Überprüfung auf ungültige Zeichen (nicht Buchstaben oder Leerzeichen)
    else if (!/^[a-zA-Z\s]+$/.test(inputValue)) {
        errorElement.textContent = "Name darf nur Buchstaben und Leerzeichen enthalten.";
        errorElement.style.visibility = "visible";
        inputError = true;
    } 
    // Keine Fehler
    else {
        errorElement.style.visibility = "hidden";
    }
    checkInputAge(inputError);
}

function checkInputAge(inputError) {
    let inputElement = document.getElementById('customer_age_input');
    let errorElement = document.getElementById('customer_age_input_error');
    let inputValue = inputElement.value.trim(); // Entfernt unnötige Leerzeichen
    // Überprüfung, ob der Wert eine Zahl ist und im Bereich 3-99 liegt
    if (!/^\d+$/.test(inputValue)) {
        errorElement.textContent = "Bitte geben Sie eine gültige Zahl ein.";
        errorElement.style.visibility = "visible";
        inputError = true;
    } else {
        let age = parseInt(inputValue, 10);
        if (age < 3 || age > 99) {
            errorElement.textContent = "Das Alter muss zwischen 3 und 99 liegen.";
            errorElement.style.visibility = "visible";
            inputError = true;
        } else {
            errorElement.style.visibility = "hidden";
        }
    }
    checkInputStreet(inputError);
}

function checkInputStreet(inputError) {
    let inputElement = document.getElementById('customer_street_input');
    let errorElement = document.getElementById('customer_street_input_error');
    let inputValue = inputElement.value.trim(); // Entfernt unnötige Leerzeichen
    // Überprüfung, ob das Feld leer ist
    if (inputValue === '') {
        errorElement.textContent = "Der Straßenname darf nicht leer sein.";
        errorElement.style.visibility = "visible";
        inputError = true;
    } 
    // Überprüfung, ob der Wert nur Buchstaben, Leerzeichen und Bindestriche enthält
    else if (!/^[a-zA-ZäöüßÄÖÜ\s-]+$/.test(inputValue)) {
        errorElement.textContent = "Bitte geben Sie nur Buchstaben, Leerzeichen und '-' ein.";
        errorElement.style.visibility = "visible";
        inputError = true;
    } else {
        errorElement.style.visibility = "hidden";
        inputError = false; // Setze den Fehlerstatus zurück, wenn die Eingabe gültig ist
    }
    // Zusätzliche Validierung für die Hausnummer
    inputError = checkInputStreetNumber(inputError);
}

function checkInputStreetNumber(inputError) {
    let inputElement = document.getElementById('customer_streetNo_input');
    let errorElement = document.getElementById('customer_streetNo_input_error');
    let inputValue = inputElement.value.trim(); // Entfernt unnötige Leerzeichen
    // Überprüfung, ob der Wert eine Zahl ist und >= 1
    if (!/^\d+$/.test(inputValue)) {
        errorElement.textContent = "Bitte geben Sie eine gültige Zahl ein.";
        errorElement.style.visibility = "visible";
        inputError = true;
    } else {
        let number = parseInt(inputValue, 10);
        if (number < 1) {
            errorElement.textContent = "Die Zahl muss mindestens 1 sein.";
            errorElement.style.visibility = "visible";
            inputError = true;
        } else {
            errorElement.style.visibility = "hidden";
        }
    }
    checkInputAreaCode(inputError);
}

function checkInputAreaCode(inputError) {
    let inputElement = document.getElementById('customer_areaCode_input');
    let errorElement = document.getElementById('customer_areaCode_input_error');
    let inputValue = inputElement.value.trim(); // Entfernt unnötige Leerzeichen
    // Überprüfung, ob der Wert aus mindestens zwei Ziffern besteht
    if (!/^\d{2,}$/.test(inputValue)) {
        errorElement.textContent = "Bitte geben Sie eine mehrstellige Zahl ein.";
        errorElement.style.visibility = "visible";
        inputError = true;
    } else {
        errorElement.style.visibility = "hidden";
    }
    checkInputCity(inputError)
    return inputError;
}

function checkInputCity(inputError) {
    let inputElement = document.getElementById('customer_city_input');
    let errorElement = document.getElementById('customer_city_input_error');
    let inputValue = inputElement.value.trim(); // Entfernt unnötige Leerzeichen
    // Überprüfung, ob das Feld leer ist
    if (inputValue === '') {
        errorElement.textContent = "Der Ort darf nicht leer sein.";
        errorElement.style.visibility = "visible";
        inputError = true;
    } 
    // Überprüfung, ob der Wert nur Buchstaben, Leerzeichen und Bindestriche enthält
    else if (!/^[a-zA-ZäöüßÄÖÜ\s-]+$/.test(inputValue)) {
        errorElement.textContent = "Bitte geben Sie nur Buchstaben, Leerzeichen und '-' ein.";
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

function collectData(inputError) {
    console.log(inputError);
    let newCustomer = {
        'id' : `0`,
        'name' : `${document.getElementById('customer_name_input').value.trim()}`,
        'age' : `${document.getElementById('customer_age_input').value.trim()}`,
        'street' : `${document.getElementById('customer_street_input').value.trim()}`,
        'streetNo' : `${document.getElementById('customer_streetNo_input').value.trim()}`,
        'areaCode' : `${document.getElementById('customer_areaCode_input').value.trim()}`,
        'city' : `${document.getElementById('customer_city_input').value.trim()}`,
        'wishes' : {}
    }
    console.log(newCustomer);
}