const back2TopButton = document.getElementById("back2top");

window.addEventListener("scroll", function(){
    if (window.scrollY > 350){
        back2TopButton.style.display = "block";
    }
    else{
        back2TopButton.style.display = "none";
    }
})

back2TopButton.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})