const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const finalDiv = document.querySelector('.final-step')



function go(currentStep, nextStep)
{

    let dNone, dBlock; 
    
    if(currentStep == 1)
    {
        dNone = firstDiv;
    }
    else if(currentStep == 2)
    {
        dNone = secondDiv;
    }
    else
    {
        dNone = finalDiv;
    }
    dNone.style.display = 'none';



    if(nextStep == 1)
    {
        dBlock = firstDiv;
    }
    else if(nextStep == 2)
    {
        dBlock = secondDiv;
    }
    else
    {
        dBlock = finalDiv;
    }
    dBlock.style.display = 'block';
}


function validate(){
    const peso   = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const nome   = document.getElementById('nome');

    peso.style.border = 'none';
    altura.style.border = 'none';
    nome.style.border = 'none';

    if(!peso.value || !altura.value || !nome.value)
        {
            if(!peso.value && !altura.value && !nome.value){
                peso.style.border = '1px solid red';
                altura.style.border = '1px solid red';
                nome.style.border = '1px solid red';
            }
            else if(!peso.value && !altura.value) {
                peso.style.border = '1px solid red';
                altura.style.border = '1px solid red';
            }
            else if(!altura.value && !nome.value){
                altura.style.border = '1px solid red';
                nome.style.border = '1px solid red';
            }
            else if(!peso.value && !nome.value){
                peso.style.border = '1px solid red';
                nome.style.border = '1px solid red';
            }
            else if(!peso.value){
                peso.style.border = '1px solid red';
            }
            else if(!altura.value){
                altura.style.border = '1px solid red';
            }
            else if(!nome.value){
                nome.style.border = '1px solid red';
            } 

        }
        else
        {
            let imc = (peso.value / (altura.value * altura.value)).toFixed(1);
            const resultado = document.getElementById('resultado');

            if(imc < 18.5){
                console.log('Abaixo do peso | Obesidade: 0');
                resultado.innerHTML = 'Abaixo do peso | Obesidade: 0';
                resultado.style.color = 'yellow';
            }
            else if(imc >= 18.5 && imc < 25){
                console.log('Normal | Obesidade: 0');
                resultado.innerHTML = 'Normal | Obesidade: 0';
                resultado.style.color = 'green';
            }
            else if(imc >= 25 && imc < 30){
                console.log('Sobrepeso | Obesidade: I');
                resultado.innerHTML = 'Sobrepeso | Obesidade: I';
                resultado.style.color = 'yellow';
            }
            else if(imc >= 30 && imc < 40){
                console.log('Obesidade | Obesidade: II');
                resultado.innerHTML = 'Obesidade | Obesidade: II';
                resultado.style.color = 'red';
            }
            else{
                console.log('Obesidade grave | Obesidade: III');
                resultado.innerHTML = 'Obesidade grave | Obesidade: III';
                resultado.style.color = 'black';
            }
            go(2,3);
            
          




        }


}



    









 


// até 8 minutos explica sobre passar da firstdiv para a secondDiv

// Metodo da live 8:

//const button = document.getElementById('button');
//const nome = document.getElementById('nome');
//const peso = document.getElementById('peso'); 
//const altura = document.getElementById('altura');
//const resultado = document.getElementById('resultado');


//const getText = (imc) => {
    //if(imc > 40) return 'Obesidade grau III';
    //if(imc > 35) return 'Obesidade grau II';
    //if(imc > 30) return 'Obesidade grau I';
    //if(imc > 25) return 'Levemente acima do peso';
    //if(imc > 18.5) return 'Peso ideal';
    //return 'Abaixo do peso';
//}

//const imcCalc = () => {
 //   if(!peso.value || !altura.value || !nome.value) return resultado.textContent = 'Preencha todos os campos'
  //  const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1);
//    resultado.textContent = `${nome.value} - ${getText(valorImc)}`;
//}

//button.addEventListener ('click', imcCalc);