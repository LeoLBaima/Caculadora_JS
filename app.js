var cond;

var operacao;

var num1;
var num2;



function numero(n){
    var numero = document.getElementById('visor').innerText
    document.getElementById('visor').innerText = numero.toString() + n.toString()
}


function clear() {
    document.getElementById('visor').innerText = ''
}

function somar(){
    cond = 1;
    operacao = "add";
 
    if(!num1){
        num1 = parseFloat((document.getElementById("resp").innerText));
        console.log(num1);
        document.getElementById("visor").innerText = num1;
    } else{
        num2 = parseFloat((document.getElementById("resp").innerText));
        console.log(num2);
        document.getElementById("visor").innerText = num2;
    }
    
    clear()
}

function subtrair(){
    cond = 1;
    operacao = "sub";
 
    if(!num1){
        num1 = parseFloat((document.getElementById("resp").innerText));
        console.log(num1);
        document.getElementById("visor").innerText = num1;
    } else{
        num2 = parseFloat((document.getElementById("resp").innerText));
        console.log(num2);
        document.getElementById("visor").innerText = num2;
    }
    
    clear()
}

function multiplicar(){
    cond = 1;
    operacao = "mult";
 
    if(!num1){
        num1 = parseFloat((document.getElementById("resp").innerText));
        console.log(num1);
        document.getElementById("visor").innerText = num1;
    } else{
        num2 = parseFloat((document.getElementById("resp").innerText));
        console.log(num2);
        document.getElementById("visor").innerText = num2;
    }
    
    clear()
}

function dividir(){
    cond = 1;
    operacao = "slice";
 
    if(!num1){
        num1 = parseFloat((document.getElementById("resp").innerText));
        console.log(num1);
        document.getElementById("visor").innerText = num1;
    } else{
        num2 = parseFloat((document.getElementById("resp").innerText));
        console.log(num2);
        document.getElementById("visor").innerText = num2;
    }  

    clear()
}

function sinal(){
    var sinal = parseFloat((document.getElementById("resp").innerText));  
    
    if(sinal>0){
        document.getElementById("visor").innerText = -sinal;
    } else{
        document.getElementById("visor").innerText = sinal*-1;
    }

}

function ponto(){
    document.getElementById("visor").style.pointerEvents='none';
    var ponto = parseFloat((document.getElementById("resp").innerText));
    document.getElementById("visor").innerText = ponto+'.';
    var ponto2 = ((document.getElementById("resp").innerText));
    console.log(ponto2);
    document.getElementById("visor").innerText = ponto2;

}

function bc(){
    var bc = ((document.getElementById("resp").innerText));
    var bcar = bc.split("");
    bcar.pop();
    document.getElementById("visor").innerText = bcar.join('');
}

function result(){
    document.getElementById("visor").style.pointerEvents='all';
    /*  
    Soma = 1
    Subtracao = 2
    multiplicacao = 3
    divisao = 4
    porcentagem = 5
    */

    if(operacao == "add"){
        num2 = parseFloat((document.getElementById("resp").innerText));
        document.getElementById("visor").innerText = num1+num2;
    } else if(operacao == "sub"){
        num2 = parseFloat((document.getElementById("resp").innerText));
        document.getElementById("visor").innerText = num1-num2;
    } else if(operacao == "mult"){
        num2 = parseFloat((document.getElementById("resp").innerText));
        document.getElementById("visor").innerText = num1*num2;
    } else if(operacao == "slice"){
        num2 = parseFloat((document.getElementById("resp").innerText));
        document.getElementById("visor").innerText = num1/num2;
    }

}