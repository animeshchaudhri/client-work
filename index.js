const open = document.querySelectorAll(".open");
const drop = document.querySelectorAll(".drop");
const body = document.querySelector("body");
const menuBtn = document.querySelector(".menuBtn");
const mobMenu = document.querySelector(".mobMenu");
const dropMob = document.querySelectorAll(".dropMob");
const dropPara = document.querySelectorAll(".dropTextMob");
const dropText = document.querySelectorAll(".dropText");
const arrow = document.querySelectorAll(".link img");
const mobLink = document.querySelectorAll(".headLink");
const arrowMob = document.querySelectorAll(".mobLink img");








 for (let i=0; i < open.length; i++) {
    
    open[i].addEventListener("click", function() { 
       
        if (drop[i].classList.contains("show")){
    remover(drop, "show");
    remover(dropText, "show");
    remover(arrow, "rotate");
        }
        else {
            remover(drop, "show");
            remover(dropText, "show");
            remover(arrow, "rotate");
            drop[i].classList.toggle("show");
            dropText[i].classList.toggle("show");
            arrow[i].classList.toggle("rotate");
        }
    })
} 


menuBtn.addEventListener("click", function() {
    
    mobMenu.classList.toggle("show");
    menuBtn.classList.toggle('move');
   
})


for (let i=0; i < mobLink.length; i++) {
   
    mobLink[i].addEventListener("click", function() { 
       
        if (dropMob[i].classList.contains("show")){
    remover(dropMob, "show");
    remover(dropPara, "show");
    remover(arrowMob, "rotate");
   
        }
        else {
            remover(dropMob, "show");
            remover(dropPara, "show");
            remover(arrowMob, "rotate");
            // remover(dropPara, "show")
            dropMob[i].classList.toggle("show");
            arrowMob[i].classList.toggle("rotate");
            dropPara[i].classList.toggle("show");
            
            
        }
    })
} 


function remover(el, cl) {
    for (let i=0; i < el.length; i++) {
        el[i].classList.remove(cl);
    }

    

}

window.addEventListener("resize", function () {
    remover(dropMob, "show");
    remover(arrowMob, "rotate");
    remover(drop, "show");
    remover(arrow, "rotate");
    remover(dropText, "show");
    remover(dropPara, "show")
    menuBtn.classList.remove('move');
    mobMenu.classList.remove("show");

})
