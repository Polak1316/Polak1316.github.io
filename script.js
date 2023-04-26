var img=document.getElementById("img");
var divdp=document.getElementById("divdp");


divdp.addEventListener("mouseenter",function(){
    divdp.style.width="fit-content";
    divdp.style.height="auto";
    img.style.display="block";
    // divdp.style.transition="all";
    // divdp.style.transitionDuration="2s";
})

divdp.addEventListener("mouseleave",function(){
    divdp.style.width="30px";
    divdp.style.height="30px";
    img.style.display="none";
    // divdp.style.transition="all";
    // divdp.style.transitionDuration="2s";
})