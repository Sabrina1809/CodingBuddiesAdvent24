function renderCustomer(dataBase) {
    document.querySelector(".list_of_customer").innerHTML = ``;
    for (let i = 0; i < dataBase.customerArray.length; i++) {
        document.querySelector(".list_of_customer").innerHTML += `
          <div class="customer_data" id="customer${dataBase.customerArray[i].id}">
                <div class="customer_contact">
                    <div class="customer_contact_ctn">
                        <div class="customer_name_age_info_ctn">
                            <span class="customer_name_info">${dataBase.customerArray[i].name} </span>
                            <span class="customer_age_info">(${dataBase.customerArray[i].age})</span>
                        </div>
                        <div class="customer_adress_info">
                            ${dataBase.customerArray[i].street} ${dataBase.customerArray[i].streetNo} <br>
                            ${dataBase.customerArray[i].areaCode} ${dataBase.customerArray[i].city}
                        </div>
                    </div>
                    <div class="add_wish_button_ctn">
                        <div onclick="openAddWishForm('addWishCustomer${dataBase.customerArray[i].id}')" class="add_wish_button button">
                            <img onclick="openAddWishForm('addWishCustomer${dataBase.customerArray[i].id}')" src="./img/icons8-geschenk-64 (1).png" alt="Icon Geschenk">
                        </div>
                    </div>
                    <div class="button_line">
                        <div onclick="event.stopPropagation()" id="showMoreMenuCustomer${dataBase.customerArray[i].id}" class="more_menu">
                            <div onclick="event.stopPropagation(); openEditCustomerForm(${i}, '${dataBase.customerKeys[i]}')" class="edit_button button">
                                <img onclick="event.stopPropagation(); openEditCustomerForm(${i}, '${dataBase.customerKeys[i]}')" src="./img/icons8-bleistift-64.png" alt="Bleistift">
                            </div>
                            <div onclick="event.stopPropagation(); deleteCustomer('${dataBase.customerKeys[i]}')" class="delete_button button">
                                <img onclick="event.stopPropagation(); deleteCustomer('${dataBase.customerKeys[i]}')" src="./img/icons8-müll-64.png" alt="Mülleimer">
                            </div>
                            <div onclick="event.stopPropagation(); closeMenuMore('showMoreMenuCustomer${dataBase.customerArray[i].id}', 'show_more_btn_customer${dataBase.customerArray[i].id}')" class="close_menu_button button">
                                <img onclick="event.stopPropagation(); closeMenuMore('showMoreMenuCustomer${dataBase.customerArray[i].id}', 'show_more_btn_customer${dataBase.customerArray[i].id}')" src="./img/icons8-ausgang-80.png" alt="Ausgang">
                            </div>
                        </div>
                        <div onclick="event.stopPropagation(); openMenuMore('showMoreMenuCustomer${dataBase.customerArray[i].id}', 'show_more_btn_customer${dataBase.customerArray[i].id}', event)" id="show_more_btn_customer${dataBase.customerArray[i].id}" class="edit_button button">
                            <span onclick="event.stopPropagation(); openMenuMore('showMoreMenuCustomer${dataBase.customerArray[i].id}', 'show_more_btn_customer${dataBase.customerArray[i].id}', event)"  class="show_more_button">&#x22EF;</span>
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
                                <div onclick="event.stopPropagation()" id="showMoreMenuCustomer${dataBase.customerArray[i].id}wish0" class="more_menu">
                                    <div onclick="event.stopPropagation(); editTransaction(transactionToEdit)" class="edit_button button">
                                        <img onclick="event.stopPropagation(); editTransaction(transactionToEdit)" src="./img/icons8-bleistift-64.png" alt="Bleistift">
                                    </div>
                                    <div onclick="event.stopPropagation(); deleteTransaction(${dataBase.customerKeys[i]})" class="delete_button button">
                                        <img onclick="event.stopPropagation(); deleteTransaction(idToWork)" src="./img/icons8-müll-64.png" alt="Mülleimer">
                                    </div>
                                    <div onclick="event.stopPropagation(); closeMenuMore('showMoreMenuCustomer${dataBase.customerArray[i].id}wish0', 'show_more_btn_customer${dataBase.customerArray[i].id}_wish0', event)" class="close_menu_button button">
                                        <img onclick="event.stopPropagation(); closeMenuMore('showMoreMenuCustomer${dataBase.customerArray[i].id}wish0', 'show_more_btn_customer${dataBase.customerArray[i].id}_wish0', event)" src="./img/icons8-ausgang-80.png" alt="Ausgang">
                                    </div>
                                </div>
                                <div onclick="event.stopPropagation(); openMenuMore('showMoreMenuCustomer${dataBase.customerArray[i].id}wish0', 'show_more_btn_customer${dataBase.customerArray[i].id}_wish0', event)" id="show_more_btn_customer${dataBase.customerArray[i].id}_wish0" class="edit_button button">
                                    <span onclick="event.stopPropagation(); openMenuMore('showMoreMenuCustomer${dataBase.customerArray[i].id}wish0', 'show_more_btn_customer${dataBase.customerArray[i].id}_wish0', event)" class="show_more_button">&#x22EF;</span>
                                </div>
                            </div>
                          
                        </li>


                    </ul>
                    
                </div>
                 <div class="form_ctn_wish" id="addWishCustomer${dataBase.customerArray[i].id}">
                    <input placeholder="Make a wish..." id="wish_description" type="text">
                    <span class="error_message_input" id="customer_wish_input_error">Fill out, please.</span>

                    <div class="buttons_form_bottom">
                        <div onclick="clearWishForm()" class="button_form" id="button_form_clear">
                            <img src="./img/icons8-fegen-50 (1).png" alt="Icon Besen">
                        </div>
                        <div id="change_button_ctn">
                            <button onclick="checkWishInput()" class="button_form" id="button_form_save" type="submit">
                                <img src="./img/icons8-speichern-50 (1).png" alt="Icon Diskette">
                            </button>
                        </div>
                         <div onclick="event.stopPropagation(); closeAddWishForm('addWishCustomer${dataBase.customerArray[i].id}')" class=" button button_form">
                            <img onclick="event.stopPropagation(); closeAddWishForm('addWishCustomer${dataBase.customerArray[i].id}')" src="./img/icons8-ausgang-80 (1).png" alt="Ausgang">
                        </div>
                    </div>
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