// LIMPIAR

let clear = document.getElementById("clear");

clear.addEventListener("click", clearApp);

function clearApp(){
    location.reload();
}
    
// SUMA

let sumaBtn = document.getElementById("suma");

sumaBtn.addEventListener("click", sumar);

function sumar(){
    let resultado;
    let showRes;
    let num1 = document.getElementById("num-1").value; 
    let num2 = document.getElementById("num-2").value;
        
    resultado = parseInt(num1) + parseInt(num2);
   
    if (isNaN(resultado)){
        alert("Alguno de los numeros ingresados son incorrectos o no son números.");
        location.reload();
    } else{
        document.getElementById("resultado").value = resultado;
    }
}

// RESTA

let restaBtn = document.getElementById("resta");

restaBtn.addEventListener("click", restar);

function restar(){
    let resultado;
    let showRes;
    let num1 = document.getElementById("num-1").value; 
    let num2 = document.getElementById("num-2").value;
        
    resultado = parseInt(num1) - parseInt(num2);

    if (isNaN(resultado)){
        alert("Alguno de los numeros ingresados son incorrectos o no son números.");
        location.reload();
    } else{
        document.getElementById("resultado").value = resultado;
    }
}

// MULTIPLICACION

let multiBtn = document.getElementById("multi");

multiBtn.addEventListener("click", multiplicar);

function multiplicar(){
    let resultado;
    let showRes;
    let num1 = document.getElementById("num-1").value; 
    let num2 = document.getElementById("num-2").value;
        
    resultado = parseInt(num1) * parseInt(num2);

    if (isNaN(resultado)){
        alert("Alguno de los numeros ingresados son incorrectos o no son números.");
        location.reload();
    } else{
        document.getElementById("resultado").value = resultado;
    }
}

// DIVISION

let divBtn = document.getElementById("dividir");

divBtn.addEventListener("click", dividir);

function dividir(){
    let resultado;
    let showRes;
    let num1 = document.getElementById("num-1").value; 
    let num2 = document.getElementById("num-2").value;

    if (num2 == 0){
        alert("No puedes dividir por 0")
    } else resultado = parseInt(num1) / parseInt(num2);
  
    if (isNaN(resultado)){
        alert("Alguno de los numeros ingresados son incorrectos o no son números.");
        location.reload();
    } else{
       
  

    document.getElementById("resultado").value = resultado;
    }      
}
