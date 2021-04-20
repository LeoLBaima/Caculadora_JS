var cond;

var operacao;

var num1;
var num2;



function numero(n){
    var number = `${document.getElementById('display').value}`
    if(n != 0){
        if(number === '0'){
            number = ''
        }    
        if(number.length <= 9) {
            document.getElementById('display').value = `${number + n}`;
        }
        else {
            return;
        }
    }
    else{
        if(number !== '0'){
            if(number.length <= 9) {
                document.getElementById('display').value = `${number + n}`;
            }
            else {
                return;
            }
        }
        else return;       
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
    document.getElementById('hist').innerText = '';
    document.getElementById('op').innerText = '';
}

function somar(){
    cond = 1;
    operacao = "add";
    document.getElementById('op').innerText = '+'
    if(!num1){
        num1 = parseFloat(document.getElementById("display").value);
        console.log(num1);
    } else{
        num2 = parseFloat(document.getElementById("display").value);
        console.log(num2);
    }
    up();
    limpar()
}

function subtrair(){
    cond = 1;
    operacao = "sub";
    document.getElementById('op').innerText = '-'
    if(!num1){
        num1 = parseFloat(document.getElementById("display").value);
        console.log(num1);
    } else{
        num2 = parseFloat(document.getElementById("display").value);
        console.log(num2);
    }
    up();
    limpar();
}

function multiplicar(){
    cond = 1;
    operacao = "mult";
    document.getElementById('op').innerText = 'x'
    if(!num1){
        num1 = parseFloat(document.getElementById("display").value);
        console.log(num1);
    
    } else{
        num2 = parseFloat(document.getElementById("display").value);
        console.log(num2);
    }
    up();
    limpar()
}

function dividir(){
    cond = 1;
    operacao = "split";
    document.getElementById('op').innerText = '/'
    if(!num1){
        num1 = parseFloat(document.getElementById("display").value);
        console.log(num1);
    } else{
        num2 = parseFloat(document.getElementById("display").value);
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
    var ponto = document.getElementById("display").value;
    document.getElementById("display").value = ponto+'.';
    var ponto2 = document.getElementById("display").value;
    document.getElementById("display").value = ponto2;
    console.log(ponto2);
}

function bc(){
    var bc = (document.getElementById("display").value);
    var bcar = bc.split("");
    bcar.pop();
    if(bc.length === 1) {
        document.getElementById("display").value = '0';
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
        num2 = parseFloat(document.getElementById("display").value);
        document.getElementById("display").value = num1+num2;
    } else if(operacao == "sub"){
        num2 = parseFloat(document.getElementById("display").value);
        document.getElementById("display").value = num1-num2;
    } else if(operacao == "mult"){
        num2 = parseFloat(document.getElementById("display").value);
        document.getElementById("display").value = num1*num2;
         
    } else if(operacao == "split"){
        num2 = parseFloat(document.getElementById("display").value);
        document.getElementById("display").value = num1/num2;
    }

    num1 = 0;
    num2 = 0;
    console.log(document.getElementById("display").value)
    limparhist();
}