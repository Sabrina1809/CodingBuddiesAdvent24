function openAddWishForm(addFormCustomer) {
    document.getElementById(addFormCustomer).style.display = "flex"; 
    document.getElementById('customer_wish_input_error').style.visibility = "hidden";

}

function closeAddWishForm(addFormCustomer) {
    clearWishForm()
    document.getElementById(addFormCustomer).style.display = "none";
}

function clearWishForm() {
    document.getElementById('wish_description').value = "";
}

function checkWishInput() {
    if (document.getElementById('wish_description').value.trim() !== "") {
        console.log('steht was drin');
        document.getElementById('customer_wish_input_error').style.visibility = "hidden";
    } else {
        document.getElementById('customer_wish_input_error').style.visibility = "visible";
    }
}