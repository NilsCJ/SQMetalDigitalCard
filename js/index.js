var mediaqueryList = window.matchMedia("(max-width: 768px)");
var phone = document.querySelector(".fa-2x");
var insta = document.querySelector(".fa-instagram");
var face = document.querySelector(".fa-facebook-f");
var mail = document.querySelector(".fa-envelope");
var hiddenFace = document.querySelector(".hidden-face");
var hiddenInsta = document.querySelector(".hidden-insta");
var hiddenPhone = document.querySelector(".hidden-phone");
var hiddenMail = document.querySelector(".hidden-mail");


if(mediaqueryList.matches) {
    phone.classList.remove("fa-2x");
    insta.classList.remove("fa-2x");
    face.classList.remove("fa-2x");
    mail.classList.remove("fa-2x");
    console.log("Se han removido las clases");
    //Hace aparecer los iconos a la izquierda
    hiddenFace.style.visibility = "visible";
    hiddenInsta.style.visibility = "visible";
    hiddenPhone.style.visibility = "visible";
    hiddenMail.style.visibility = "visible";
    //Esconde el icono grande
    phone.style.visibility = "hidden";
    face.style.visibility = "hidden";
    mail.style.visibility = "hidden";
    insta.style.visibility = "hidden";

}else{
    phone.classList.add("fa-2x");
    console.log("Se han agregado las clases");
 }











