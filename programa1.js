function multiplica(num1,num2){
    /*alert(resultado);*/
    return num1*num2;
}
function soma (num1, num2){
    /*alert(resultado);*/
    return eval (num1)+eval(num2);
}

function dividir (num1, num2){
    /*alert(resultado);*/
    return num1/num2;
}

function subtrair (num1, num2){
    /*alert(resultado);*/
    return eval(num1)-eval(num2);
}

function fatorial (num1){
    var fatorial = num1;
    var resultado = fatorial;
    for (var i = 1; i < fatorial; i++){
    resultado *= i;    //fat = fat * i
    }
    return resultado;
}

function neperiano (num1){
    var neperiano = 1;
    if(num1 == 1){
        return 1;
    }else if(num1==2){
        return 2; 
    }else{
        for (var i = 3; i <= num1; i++){
            neperiano += 1/fatorial(i-1);    // nep = nep + fatorial(i-1);
            }
            return 1+neperiano;
    }
}

function base2 (num1){
    /*alert(resultado);*/
    var base02 = [num1+1];
    var texto = "<ul>"
    for(var i = 0; i<=num1; i++){
        base02[i] = Math.pow(2,i);
        texto +="<li>" + base02[i] + "</li>";
    }
    return texto;
}

function transBase8 (num1){
    var base8 = []; 
    for(var i=0; num1>=1; i++) {
        base8[i] = num1%8;
        num1 = Math.trunc(num1/8);
    }
    base8.reverse();
    return base8;
}

function raiz(num1,num2){
    return Math.pow(num1,1/num2);
}

function seno (num1){
    return Math.sin(num1);
}

function cosseno (num1){
   return Math.cos(num1);
}

function tangente (num1){
    return Math.tan(num1);
}

function fib (num1){
  var a,b, result;
  a=0;
  b=1;
  result=b;
  var texto = "<ul>";
  for(var i=1; i<=num1; i++){
    texto +="<li>" +result;
    result = a+b;
    a=b;
    b=result;
  }
  return texto;
}

function log (num1) {
    return Math.log10(num1);
}

function elevado (num1, num2){
    return Math.pow(num1,num2);
}

function validarCPF(num1) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}


function validaBusca(){
	if (document.querySelector("#txt").value == '') {
		document.querySelector("#mensagem").innerHTML = "campos obrigatórios não preenchidos";
	    document.querySelector("#textoDigitado").innerHTML = "*";
		document.querySelector("#txt").focus();
	} else {
		document.querySelector("#mensagem").innerHTML = document.querySelector("#txt").value;
        //imprimeParagrafo();
	}
}

function transBase2(num1) {
    var base2 = [];
    for(var i=0; num1>1; i++) {
        base2[i] = num1%2;
        num1 = Math.trunc(num1/2);
    }
    base2[base2.length] = 1;
    //len = base2.length-1;
    //for(var i=len; i>=0; i--) {
        //aux[len-i]= base2[i];
    //}
    base2.reverse();
    return base2;
}

function apagar(){
    document.getElementById("demo").innerHTML = "";
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    window.alert("Você apagou tudo");
}

function imprimeParagrafo(par1, par2, op){
    //document.getElementById("demo").innerHTML = " Hoje é dia "+Date();
    if(op==1){
        document.getElementById("demo").innerHTML = ""+multiplica(par1, par2);
        }
    else if (op==2){
        document.getElementById("demo").innerHTML = ""+soma(par1, par2);
        }
    else if (op==3){
        document.getElementById("demo").innerHTML = ""+dividir(par1, par2);
        }

    else if (op==4){
        document.getElementById("demo").innerHTML = ""+subtrair(par1, par2);
        }
    else if (op==5){
        document.getElementById("demo").innerHTML = ""+fatorial(par1);
        }
    else if (op==6){
        document.getElementById("demo").innerHTML = ""+neperiano(par1);
        }
    else if (op==7){
        document.getElementById("demo").innerHTML = ""+base2(par1);
        }
    else if (op==8){
        document.getElementById("demo").innerHTML = ""+transBase2(par1).join("");
        }
    else if (op==9){
        document.getElementById("demo").innerHTML = ""+transBase8(par1).join("");
        }
    else if (op==10){
        document.getElementById("demo").innerHTML = ""+fib(par1);
        }
    else if (op==11){
        document.getElementById("demo").innerHTML = ""+seno(par1);
        }
    else if (op==12){
        document.getElementById("demo").innerHTML = ""+cosseno(par1);
        }
    else if (op==13){
        document.getElementById("demo").innerHTML = ""+tangente(par1);
        }
    else if (op==14){
        document.getElementById("demo").innerHTML = ""+raiz(par1,par2);
        }
    else if (op==15){
        document.getElementById("demo").innerHTML = ""+log(par1);
        }
    else if (op==16){
        document.getElementById("demo").innerHTML = ""+elevado(par1,par2);
        }
        else if (op==17){
            document.getElementById("demo").innerHTML = ""+validarCPF(par1);
            }
}

