var cond;

var operacao;

var num1;
var num2;



function numero(n){
    var numero = document.getElementById('display').innerText
    if(numero == '0'){
        numero = '';
        document.getElementById('display').innerText = numero.toString() + n.toString()
    }
    else{
        document.getElementById('display').innerText = numero.toString() + n.toString()
    }
}

function limpar() {
    document.getElementById('display').innerText = '0'
    num1 = 0;
    num2 = 0;
}

function limparhist() {
    document.getElementById('hist').innerText = '0';
}

function somar(){
    cond = 1;
    operacao = "add";
 
    if(!num1){
        num1 = parseFloat((document.getElementById("display").innerText));
        console.log(num1);
    } else{
        num2 = parseFloat((document.getElementById("display").innerText));
        console.log(num2);
    }
    up();
    limpar()
}

function subtrair(){
    cond = 1;
    operacao = "sub";
    if(!num1){
        num1 = parseFloat((document.getElementById("display").innerText));
        console.log(num1);
    } else{
        num2 = parseFloat((document.getElementById("display").innerText));
        console.log(num2);
    }
    up();
    limpar();
}

function multiplicar(){
    cond = 1;
    operacao = "mult";
 
    if(!num1){
        num1 = parseFloat((document.getElementById("display").innerText));
        console.log(num1);
    
    } else{
        num2 = parseFloat((document.getElementById("display").innerText));
        console.log(num2);
    }
    up();
    limpar()
}

function dividir(){
    cond = 1;
    operacao = "slice";
 
    if(!num1){
        num1 = parseFloat((document.getElementById("display").innerText));
        console.log(num1);
    } else{
        num2 = parseFloat((document.getElementById("display").innerText));
        console.log(num2);
    }
    up();
    limpar()

}

function sinal(){
    var sinal = parseFloat((document.getElementById("display").innerText));  
    
   if(sinal !=0){
    if(sinal > 0){
        document.getElementById("display").innerText = -sinal;
    } else {
        document.getElementById("display").innerText = sinal*-1;
    }
   }

}

function ponto(){
    document.getElementById("display").style.pointerEvents='none';
    var ponto = parseFloat((document.getElementById("display").innerText));
    document.getElementById("display").innerText = ponto+'.';
    var ponto2 = ((document.getElementById("display").innerText));
    console.log(ponto2);
    document.getElementById("display").innerText = ponto2;

}

function bc(){
    var bc = ((document.getElementById("display").innerText));
    var bcar = bc.split("");
    bcar.pop();
    if(bc.length === 1) {
        document.getElementById("display").innerText = 0;
    }
    else {
        document.getElementById("display").innerText = bcar.join('');
    }

}

function up() {
    document.getElementById("hist").innerText = document.getElementById("display").innerText;
}


function result(){
    document.getElementById("display").style.pointerEvents='all';
    /*  
    Soma = 1
    Subtracao = 2
    multiplicacao = 3
    divisao = 4
    porcentagem = 5
    */

    if(operacao == "add"){
        num2 = parseFloat((document.getElementById("display").innerText));
        document.getElementById("display").innerText = num1+num2;
    } else if(operacao == "sub"){
        num2 = parseFloat((document.getElementById("display").innerText));
        document.getElementById("display").innerText = num1-num2;
    } else if(operacao == "mult"){
        num2 = parseFloat((document.getElementById("display").innerText));
        document.getElementById("display").innerText = num1*num2;
    } else if(operacao == "slice"){
        num2 = parseFloat((document.getElementById("display").innerText));
        document.getElementById("display").innerText = num1/num2;
    }
    num1 = 0;
    num2 = 0;
    console.log(document.getElementById("display").innerText)
    limparhist();
}