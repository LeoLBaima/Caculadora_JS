var valor1;
var valor2;
var valor3;
var valor4;
var valor5;
var valor6;

var valor11;
var valor22;
var valor33;
var valor44;
var valor55;
var valor66;

var cond;

var operacao;

var num1;
var num2;



function numero(n){

    if(!cond){

        if(!valor1){
            valor1 = n;
            document.getElementById("visor").innerText = valor1;
            
        } else if (!valor2){
            valor2 = n;
            document.getElementById("visor").innerText = valor1+""+valor2;
            
            
        } else if(!valor3){
            valor3 = n;
            document.getElementById("visor").innerText = valor1+""+valor2+""+valor3;
            
        } else if(!valor4){
            valor4 = n;
            document.getElementById("visor").innerText = valor1+""+valor2+""+valor3+valor4;
            
        } else if(!valor5){
            valor5 = n;
            document.getElementById("visor").innerText = valor1+""+valor2+""+valor3+valor4+""+valor5;
            
        } else if(!valor6){
            valor6 = n;
            document.getElementById("visor").innerText = valor1+""+valor2+""+valor3+""+valor4+""+valor5+""+valor6;
            
        } 

    } else {

        if(!valor11){
            valor11 = n;
            document.getElementById("visor").innerText = valor11;
            
        } else if (!valor22){
            valor22 = n;
            document.getElementById("visor").innerText = valor11+""+valor22;
            
            
        } else if(!valor33){
            valor33 = n;
            document.getElementById("visor").innerText = valor11+""+valor22+""+valor33;
            
        } else if(!valor44){
            valor44 = n;
            document.getElementById("visor").innerText = valor11+""+valor22+""+valor33+valor44;
            
        } else if(!valor55){
            valor55 = n;
            document.getElementById("visor").innerText = valor11+""+valor22+""+valor33+valor44+""+valor55;
            
        } else if(!valor66){
            valor66 = n;
            document.getElementById("visor").innerText = valor11+""+valor22+""+valor33+""+valor44+""+valor55+""+valor66;
            
        } 

    }
    

}


function somar(){
    cond = 1;
    operacao = 1;
 
    if(!num1){
        num1 = parseFloat((document.getElementById("resp").innerText));
        console.log(num1);
        document.getElementById("visor").innerText = num1;
    } else{
        num2 = parseFloat((document.getElementById("resp").innerText));
        console.log(num2);
        document.getElementById("visor").innerText = num2;
    }
    
}

function subtrair(){
    cond = 1;
    operacao = 2;
 
    if(!num1){
        num1 = parseFloat((document.getElementById("resp").innerText));
        console.log(num1);
        document.getElementById("visor").innerText = num1;
    } else{
        num2 = parseFloat((document.getElementById("resp").innerText));
        console.log(num2);
        document.getElementById("visor").innerText = num2;
    }
    
}

function multiplicar(){
    cond = 1;
    operacao = 3;
 
    if(!num1){
        num1 = parseFloat((document.getElementById("resp").innerText));
        console.log(num1);
        document.getElementById("visor").innerText = num1;
    } else{
        num2 = parseFloat((document.getElementById("resp").innerText));
        console.log(num2);
        document.getElementById("visor").innerText = num2;
    }
    
}

function dividir(){
    cond = 1;
    operacao = 4;
 
    if(!num1){
        num1 = parseFloat((document.getElementById("resp").innerText));
        console.log(num1);
        document.getElementById("visor").innerText = num1;
    } else{
        num2 = parseFloat((document.getElementById("resp").innerText));
        console.log(num2);
        document.getElementById("visor").innerText = num2;
    }  
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

    if(operacao === 1){
        num2 = parseFloat((document.getElementById("resp").innerText));
        document.getElementById("visor").innerText = num1+num2;
    } else if(operacao === 2){
        num2 = parseFloat((document.getElementById("resp").innerText));
        document.getElementById("visor").innerText = num1-num2;
    } else if(operacao === 3){
        num2 = parseFloat((document.getElementById("resp").innerText));
        document.getElementById("visor").innerText = num1*num2;
    } else if(operacao === 4){
        num2 = parseFloat((document.getElementById("resp").innerText));
        document.getElementById("visor").innerText = num1/num2;
    }

}