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
contadores[0].textContent="contagem regressiva";

