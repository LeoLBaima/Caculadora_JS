var cond;

var operacao;

var num1;
var num2;



function numero(n){
    var numero = document.getElementById('display').value
    if(numero == 0){
        numero = '';
        if(numero.length <= 9) {
            document.getElementById('display').value = numero.toString() + n.toString();
        }
        else {
            return;
        }
    } else {
        if(numero.length <= 9) {
            document.getElementById('display').value = numero.toString() + n.toString();
        }
        else {
            return;
        }
    }
}

function limpar() {
    document.getElementById('display').value = '0'
}

function limparvar() {
    num1 = 0;
    num2 = 0;
}

function limparhist() {
    document.getElementById('hist').value = '0';
}

function somar(){
    cond = 1;
    operacao = "add";
 
    if(!num1){
        num1 = parseFloat((document.getElementById("display").value));
        console.log(num1);
    } else{
        num2 = parseFloat((document.getElementById("display").value));
        console.log(num2);
    }
    up();
    limpar()
}

function subtrair(){
    cond = 1;
    operacao = "sub";
    if(!num1){
        num1 = parseFloat((document.getElementById("display").value));
        console.log(num1);
    } else{
        num2 = parseFloat((document.getElementById("display").value));
        console.log(num2);
    }
    up();
    limpar();
}

function multiplicar(){
    cond = 1;
    operacao = "mult";
 
    if(!num1){
        num1 = parseFloat((document.getElementById("display").value));
        console.log(num1);
    
    } else{
        num2 = parseFloat((document.getElementById("display").value));
        console.log(num2);
    }
    up();
    limpar()
}

function dividir(){
    cond = 1;
    operacao = "slice";
 
    if(!num1){
        num1 = parseFloat((document.getElementById("display").value));
        console.log(num1);
    } else{
        num2 = parseFloat((document.getElementById("display").value));
        console.log(num2);
    }
    up();
    limpar()

}

function sinal(){
    var sinal = parseFloat(document.getElementById("display").value);  
    if(sinal.length > 0){
        if(sinal !=0){
            if(sinal > 0){
                document.getElementById("display").value = -sinal;
            } else {
                document.getElementById("display").value = sinal*-1;
            }
        }
    }
    else {
        return;
    }
}

function ponto(){
    document.getElementById("display").style.pointerEvents='none';
    var ponto = parseFloat((document.getElementById("display").value));
    document.getElementById("display").value = ponto+'.';
    var ponto2 = ((document.getElementById("display").value));
    document.getElementById("display").value = ponto2;
    console.log(ponto2);
}

function bc(){
    var bc = ((document.getElementById("display").value));
    var bcar = bc.split("");
    bcar.pop();
    if(bc.length === 1) {
        document.getElementById("display").value = '';
    }
    else {
        document.getElementById("display").value = bcar.join('');
    }

}

function up() {
    document.getElementById("hist").innerText = document.getElementById("display").value;
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
        num2 = parseFloat((document.getElementById("display").value));
        document.getElementById("display").value = num1+num2;
    } else if(operacao == "sub"){
        num2 = parseFloat((document.getElementById("display").value));
        document.getElementById("display").value = num1-num2;
    } else if(operacao == "mult"){
        num2 = parseFloat((document.getElementById("display").value));
        document.getElementById("display").value = num1*num2;
         
    } else if(operacao == "slice"){
        num2 = parseFloat((document.getElementById("display").value));
        document.getElementById("display").value = num1/num2;
    }
    num1 = 0;
    num2 = 0;
    console.log(document.getElementById("display").value)
    limparhist();
}