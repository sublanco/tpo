

function validar(){

    let error = 0;
    let nombre = document.getElementById("nombre");
    let error_nombre = document.getElementById("error_nombre");

    if(nombre.value === ""){
        error++;
        error_nombre.innerHTML = "completar nombre";
    }else{
        error_nombre.innerHTML = "";
    }
/*---------------------------apellido-----------------------------------------*/

    let apellido = document.getElementById("apellido");
    let error_apellido = document.getElementById("error_apellido");

    if(apellido.value === ""){
        error++;
        error_apellido.innerHTML = "completar apellido";
    }else{
        error_apellido.innerHTML = "";
    }
    /*-----------------------------------edad-----------------------------*/

    let edad = document.getElementById("edad");
    let error_edad = document.getElementById("error_edad");

    if(edad.value === ""){
        error++;
        error_edad.innerHTML = "completar edad";
    }else{
        let numero = Number.parseInt(edad.value);
        if(numero > 0){
        error_edad.innerHTML = "";
        }else{
            error_edad.innerHTML="edad es un numero mayor a cero";
        }
    }
    /*________________________________email______________________________________*/
    let email = document.getElementById("email");
    let error_email = document.getElementById("error_email");

    if(email.value === ""){
        error++;
        error_email.innerHTML = "completar email";
    }else{
        error_email.innerHTML = "";
    }
    /*_______________comentario______________*/
    let comentario = document.getElementById("comentario");
    let error_comentario= document.getElementById("error_comentario");

    if(comentario.value === ""){
        error++;
        error_comentario.innerHTML = "completar comentario";
    }else{
        error_comentario.innerHTML = "";
    }
    
    return error === 0;
}