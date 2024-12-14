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
    console.log('saveForm');
    checkInputName()
    checkInputAge()
}

function checkInputName() {
    if (document.getElementById('customer_name_input').value == '') {
        document.getElementById('customer_name_input_error').style.visibility = "visible";
        inputError = true;
        return inputError
    } else {
        document.getElementById('customer_name_input_error').style.visibility = "hidden"
    }
}

function checkInputAge() {
    console.log(document.getElementById('customer_age_input').value);
    
    if (document.getElementById('customer_age_input').value > 3 && document.getElementById('customer_age_input').value < 99) {
        document.getElementById('customer_age_input_error').style.visibility = "hidden"
    } else {
        document.getElementById('customer_age_input_error').style.visibility = "visible";
        inputError = true;
        return inputError
    }
}