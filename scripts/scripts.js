document.getElementById("btn__registro").addEventListener("click",register);
document.getElementById("btn__inicio-sesion").addEventListener("click",login);



//variables
let contenedorLoginRegister= document.querySelector(".contenedor__login-register");
let formularioLogin= document.querySelector(".formulario__login");
let formularioRegister= document.querySelector(".formulario__register");
let cajaLogin= document.querySelector(".caja__login");
let cajaRegister= document.querySelector(".caja__register");

//funcion de register
function register(){
    if(window.innerWidth > 850){
    formularioRegister.style.display= "block";
    contenedorLoginRegister.style.left= "437px";
    formularioLogin.style.display= "none";
    cajaRegister.style.opacity= "0";
    cajaLogin.style.opacity = "1";
};
}
//function login

function login(){
    formularioRegister.style.display= "none";
    contenedorLoginRegister.style.left= "10px";
    formularioLogin.style.display= "block";
    cajaRegister.style.opacity= "1";
    cajaLogin.style.opacity = "0";
}