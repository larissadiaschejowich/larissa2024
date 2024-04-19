const botoes=document.querySelectoraAll(".botao");
const textos=document.querySelectorAll(".aba-conteudo");
console.log(botoes)

for (let i=0; i < botoes.length; i++) {
    botoes[i].onclick = function(){
         
        for(let j=0;j<botoes.length;j++) { 
            botoes[j].classList.remove(ativo);
            textos[j].classList.remove(ativo)
    }
    console.log(i)
}
        botoes[i].classList.add(ativo);
        textos[i].classList.add(ativo);
}
const contadores = document.querySelectoraAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
contadores[0].textContent = calculaTempo(tempoObjetivo1);

contadores[0].textContent = tempoObjetivo1 - tempoAtual;
 
function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date()
    let tempofinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);

    return minutos;
}
