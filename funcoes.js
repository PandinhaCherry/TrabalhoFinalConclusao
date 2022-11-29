/* codigo java que faz o botao funcionar */

const botao = document.querySelector(".btn-fixed");

window.addEventListener("scroll", function (event){
    if (window.scrolly == 0) {
        botao.classList.remove("visible");
    }else{
        botao.classList.add("visible");
    }
})
/* site de onde tirei o codigo do botao de voltar ao topo
https://pt.linkedin.com/pulse/como-criar-um-bot%C3%A3o-para-voltar-ao-topo-em-uma-p%C3%A1gina-calixto-mocci */