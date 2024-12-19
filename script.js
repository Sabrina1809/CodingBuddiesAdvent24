function renderCustomer(dataBase, customerArray) {
    document.querySelector(".list_of_customer").innerHTML = ``;
    console.log('renderCustomer:');
    console.log('ID: ', dataBase.customerID);
    console.log(customerArray);
    for (let i = 0; i < customerArray.length; i++) {
        document.querySelector(".list_of_customer").innerHTML += `
          <div class="customer_data" id="customer${dataBase.customerID}">
                <div class="customer_contact">
                    <div class="customer_contact_ctn">
                        <div class="customer_name_age_info_ctn">
                            <span class="customer_name_info">${customerArray[i].name} </span>
                            <span class="customer_age_info">(${customerArray[i].age})</span>
                        </div>
                        <div class="customer_adress_info">
                            ${customerArray[i].street} ${customerArray[i].streetNo} <br>
                            ${customerArray[i].areaCode} ${customerArray[i].city}
                        </div>
                    </div>
                    <div class="add_wish_button_ctn">
                        <div class="add_wish_button button">
                            <img src="./img/icons8-geschenk-64 (1).png" alt="Icon Geschenk">
                        </div>
                    </div>
                    <div class="button_line">
                        <div onclick="event.stopPropagation()" id="showMoreMenuCustomer${dataBase.customerID}" class="more_menu">
                            <div onclick="event.stopPropagation(); editTransaction(transactionToEdit)" class="edit_button button">
                                <img onclick="event.stopPropagation(); editTransaction(transactionToEdit)" src="./img/icons8-bleistift-64.png" alt="Bleistift">
                            </div>
                            <div onclick="event.stopPropagation(); deleteTransaction(idToWork)" class="delete_button button">
                                <img onclick="event.stopPropagation(); deleteTransaction(idToWork)" src="./img/icons8-müll-64.png" alt="Mülleimer">
                            </div>
                            <div onclick="event.stopPropagation(); closeMenuMore('showMoreMenuCustomer${dataBase.customerID}', 'show_more_btn_customer${dataBase.customerID}')" class="close_menu_button button">
                                <img onclick="event.stopPropagation(); closeMenuMore('showMoreMenuCustomer${dataBase.customerID}', 'show_more_btn_customer${dataBase.customerID}')" src="./img/icons8-ausgang-80.png" alt="Ausgang">
                            </div>
                        </div>
                        <div onclick="event.stopPropagation(); openMenuMore('showMoreMenuCustomer${dataBase.customerID}', 'show_more_btn_customer${dataBase.customerID}', event)" id="show_more_btn_customer${dataBase.customerID}" class="edit_button button">
                            <span onclick="event.stopPropagation(); openMenuMore('showMoreMenuCustomer${dataBase.customerID}', 'show_more_btn_customer${dataBase.customerID}', event)"  class="show_more_button">&#x22EF;</span>
                        </div>
                    </div>
                </div>
                <div class="customer_wishes">
                    <ul class="wish_list">
                        <li class="wish_ctn">
                            <div class="wish_checkbox">
                                <img class="wish_checkbox_img wish_checkbox_not_checked" src="./img/icons8-christmas-ball-sw (2).png" alt="Checkbox nicht gecheckt">
                                <img class="wish_checkbox_img wish_checkbox_checked" src="./img/icons8-christmas-ball-color.png" alt="Checkbox gechecked">
                            </div>
                            <span class="wish_title">Urlaub</span>
                            <div class="button_line">
                                <div onclick="event.stopPropagation()" id="showMoreMenuCustomer${dataBase.customerID}wish0" class="more_menu">
                                    <div onclick="event.stopPropagation(); editTransaction(transactionToEdit)" class="edit_button button">
                                        <img onclick="event.stopPropagation(); editTransaction(transactionToEdit)" src="./img/icons8-bleistift-64.png" alt="Bleistift">
                                    </div>
                                    <div onclick="event.stopPropagation(); deleteTransaction(idToWork)" class="delete_button button">
                                        <img onclick="event.stopPropagation(); deleteTransaction(idToWork)" src="./img/icons8-müll-64.png" alt="Mülleimer">
                                    </div>
                                    <div onclick="event.stopPropagation(); closeMenuMore('showMoreMenuCustomer${dataBase.customerID}wish0', 'show_more_btn_customer${dataBase.customerID}_wish0', event)" class="close_menu_button button">
                                        <img onclick="event.stopPropagation(); closeMenuMore('showMoreMenuCustomer${dataBase.customerID}wish0', 'show_more_btn_customer${dataBase.customerID}_wish0', event)" src="./img/icons8-ausgang-80.png" alt="Ausgang">
                                    </div>
                                </div>
                                <div onclick="event.stopPropagation(); openMenuMore('showMoreMenuCustomer${dataBase.customerID}wish0', 'show_more_btn_customer${dataBase.customerID}_wish0', event)" id="show_more_btn_customer0_wish0" class="edit_button button">
                                    <span onclick="event.stopPropagation(); openMenuMore('showMoreMenuCustomer${dataBase.customerID}wish0', 'show_more_btn_customer${dataBase.customerID}_wish0', event)" class="show_more_button">&#x22EF;</span>
                                </div>
                            </div>
                          
                        </li>

                    </ul>
                    
                </div>
            </div>
        `
    }
}



function openMenuMore(id, id2, e) {
    document.getElementById(id).style.display = "flex";
    document.getElementById(id2).style.display = "none";
}

function closeMenuMore(id, id2, e) {
    document.getElementById(id).style.display = "none";
    document.getElementById(id2).style.display = "flex";

}