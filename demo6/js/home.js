$(document).ready(function(){
    // Home page Best seller slide
    let thumbnails = document.getElementsByClassName("bs-thumbnail");
    let activeImg = document.getElementsByClassName("active");
    for (var i=0;i<thumbnails.length;i++){
        thumbnails[i].addEventListener("mouseover", function(){
            if(activeImg.length>0){
                activeImg[0].classList.remove("active")
            }
            this.classList.add("active")
            document.getElementById("bs-slider").src = this.src
        });
    };
})