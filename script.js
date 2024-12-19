let snowflakes = document.querySelectorAll(".form_ctn_person > img");

function openMenuMore(id, id2, e) {
    document.getElementById(id).style.display = "flex";
    document.getElementById(id2).style.display = "none";
}

function closeMenuMore(id, id2, e) {
    document.getElementById(id).style.display = "none";
    document.getElementById(id2).style.display = "flex";

}