
const imgBtn = document.querySelectorAll(".arrow-img");
const details = document.querySelectorAll("details");
const entireDiv = document.querySelectorAll("div");
const summary = document.querySelectorAll("summary");

for (let i = 0; i < entireDiv.length; i++) {
    imgBtn[i].addEventListener("click", function(){
        details[i].toggleAttribute("open");
        imgBtn[i].classList.toggle("rotated-img");
        summary[i].classList.toggle("bold-text");
    });  

    details[i].addEventListener("click", function(){
        imgBtn[i].classList.toggle("rotated-img");
        summary[i].classList.toggle("bold-text");
    });
}