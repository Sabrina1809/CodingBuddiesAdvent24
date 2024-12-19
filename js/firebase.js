const firebase_URL = 'https://advents-challenge-default-rtdb.europe-west1.firebasedatabase.app/';
let dataBase = {};
let customerArray = [];

async function getIdAndCustomer(pathData='') {
    let responseData = await fetch(firebase_URL + pathData + ".json");
    let responseDataToJson = await responseData.json();
    allCustomer = responseDataToJson.allCustomer || [];
    customerID = responseDataToJson.customerID;
    // keyForAllTasks();
    dataBase =  {customerID, allCustomer};
    // console.log(dataBase);
    customerArray = Object.values(dataBase.allCustomer);
    // console.log(customerArray);
    
    renderCustomer(dataBase, customerArray)
    return dataBase
}

async function postNewCustomer(path="", data={}) {
    let response = await fetch(firebase_URL + path + ".json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    let responseToJson = await response.json();
}

async function putNewCustomerID(path="", data={}) {
    let response = await fetch(firebase_URL + path + ".json", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    let responseToJson = await response.json();
}