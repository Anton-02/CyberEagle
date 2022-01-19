const articles = document.querySelectorAll(".article_content");
const span1 = document.querySelectorAll(".readNext");

articles.forEach(function(e){
    e.addEventListener("click", ()=>{
        e.classList.toggle("active");
    })
})