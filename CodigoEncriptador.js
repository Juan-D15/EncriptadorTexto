const txtIngreasado = document.querySelector(".txt-ingresado");
const txtEncriptado = document.querySelector(".txt-encriptado");
const copia = document.querySelector(".btn-copiar");


//funcion para validar si las letras estan en minúsculas y sin acentos
function validartxt(){
    let textoEscrito = document.querySelector(".txt-ingresado").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

//funciones encriptar y desencriptar
function encriptar(textoEncriptado){
    let Codigos = [["a",""], ["b",""], ["c",""],["d",""], ["e",""], ["f",""],["g",""], ["h",""], ["i",""],["j",""], ["k",""], ["l",""],["m",""], ["n",""], ["ñ",""],["o",""], ["p",""], ["q",""],["r",""], ["s",""], ["t",""],["u",""], ["v",""], ["w",""],["x",""], ["y",""], ["z",""]];
    textoEncriptado = textoEncriptado.toLowerCase()

    for(let i=0; i < Codigos.length;i++){
        if(textoEncriptado.includes(Codigos[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(Codigos[i][0], Codigos[i][1])
        }       
    }
        return textoEncriptado;
}

function desencriptar(textoDesencriptado){
    let Codigos = [["a","xd"], ["b","index"], ["c","array"]];
    textoDesencriptado = textoDesencriptado.toLowerCase()

    for(let i=0; i < Codigos.length;i++){
        if(textoDesencriptado.includes(Codigos[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(Codigos[i][1], Codigos[i][0])
        }       
    }
        return textoDesencriptado;
}

//funciones de los botones
function btnEncriptar(){
    if(!validartxt()) {
        const Encriptado = encriptar(txtIngreasado.value)
        txtEncriptado.value = Encriptado
        txtIngreasado.value = "";
        copia.style.display = "block"
    
    }
}

function btnDesencriptar(){
    const Desencriptado = desencriptar(txtIngreasado.value)
    txtEncriptado.value = Desencriptado
    txtIngreasado.value = "";

}

function btnCopiar(){
    txtEncriptado.select();
    navigator.clipboard.writeText(txtEncriptado.value)
    txtEncriptado.value = "";
    alert("Texto Copiado")
}


