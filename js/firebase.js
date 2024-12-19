const firebase_URL = 'https://advents-challenge-default-rtdb.europe-west1.firebasedatabase.app/';
let dataBase = {};
let customerArray = [];
let customerKeys = [];

async function getIdAndCustomer(pathData='') {
    let responseData = await fetch(firebase_URL + pathData + ".json");
    let responseDataToJson = await responseData.json();
    allCustomer = responseDataToJson.allCustomer || [];
    customerID = responseDataToJson.customerID || null;
    customerArray = Object.values(allCustomer);
    customerKeys = Object.keys(allCustomer);
    dataBase =  {customerID, customerArray, customerKeys};
    console.log(dataBase);
    renderCustomer(dataBase)
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

async function deleteCustomer(path="") {
    let response = await fetch(firebase_URL + "allCustomer/" + path + ".json", {
        method: "Delete",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify()
    });
    let responseToJson = await response.json();
    await getIdAndCustomer(pathData='');
}