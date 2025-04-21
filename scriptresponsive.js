const codigo = document.getElementById("codigo");
const barraLateral =document.querySelector(".barra_lateral");
const spans = document.querySelectorAll("Span");


codigo.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini_barra_lateral");
    spans.forEach((span)=>{
        span.classList.toggle("oculto")
    })
});      
