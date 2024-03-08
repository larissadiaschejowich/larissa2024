const botoes=document.querySelectoraAll(".botao");
console.log(botoes)
for (let i=0; i < botões.length; i++) {
}
    botoes[i].onclick=function(){

for(let j=0;j<botoes.length;j++){
    botoes[j].claList.remove("ativo");
}
botoes[i].classList.add("ativo");
    }
        

