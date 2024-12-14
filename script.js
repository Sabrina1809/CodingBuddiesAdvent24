let snowflakes = document.querySelectorAll(".form_ctn_person > img");

function openNewCustomerForm() {
    document.querySelector(".form_ctn_person").style.bottom = "0"; 
    snowflakes.forEach(snowflake => {
        snowflake.style.display = "block";
    })
    document.querySelector("#addCustomerForm").style.display = "block"; 
    resetErrorMessages();
}

function  resetErrorMessages() {
    document.getElementById('customer_name_input_error').style.visibility = "hidden";
    document.getElementById('customer_age_input_error').style.visibility = "hidden"
    document.getElementById('customer_street_input_error').style.visibility = "hidden"
    document.getElementById('customer_streetNo_input_error').style.visibility = "hidden"
    document.getElementById('customer_areaCode_input_error').style.visibility = "hidden"
    document.getElementById('customer_city_input_error').style.visibility = "hidden"

}

function closeNewCustomerForm() {
    document.querySelector(".form_ctn_person").style.bottom = "100%"; 
    snowflakes.forEach(snowflake => {
        snowflake.style.display = "none";
    })
    document.querySelector("#addCustomerForm").style.display = "none"; 
}

function openMenuMore(id, id2, e) {
    document.getElementById(id).style.display = "flex";
    document.getElementById(id2).style.display = "none";

}

function closeMenuMore(id, id2, e) {
    document.getElementById(id).style.display = "none";
    document.getElementById(id2).style.display = "flex";

}