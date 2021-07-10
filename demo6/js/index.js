$(document).ready(function(){
    // Home page products
    $("#slider .owl-carousel").owlCarousel({
        loop: true,
        item: 1,
        nav: true,
        dot: false,
        margin: 10,
        responsive:{
            0:{
                items:1,
                nav: true
            },
            600:{
                items: 3,
                nav: true
            },
            1000:{
                items: 5,
                nav: true
            },
        }
    });
    // Top sale owl carousel
    $("#shop .owl-carousel").owlCarousel({
        loop: true,
        item: 1,
        nav: true,
        dot: false,
        margin: 10,
        responsive:{
            0:{
                items:1,
                nav: true
            },
            600:{
                items: 3,
                nav: true
            },
            1000:{
                items: 5,
                nav: true
            },
        }
    });

    // Isotope filter
    var $grid = $(".grid").isotope({
        itemSelector: ".grid-item",
        layoutMode: "fitRows"
    })
    // filter items on click
    $(".button-group").on("click", "button", function(){
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({filter:filterValue});
    });

    // Product Slider
    let thumbnails = document.getElementsByClassName("thumbnail");
    let activeImg = document.getElementsByClassName("active");
    for (var i=0;i<thumbnails.length;i++){
        thumbnails[i].addEventListener("mouseover", function(){
            if(activeImg.length>0){
                activeImg[0].classList.remove("active")
            }
            this.classList.add("active")
            document.getElementById("p-slider").src = this.src
        });
    };

    // Product qty
    let $qty_up = $(".qty .qty-up");
    let $qty_down = $(".qty .qty-down");
    // let $input = $(".qty .qty_input");
    $qty_up.click(function(){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($input.val() >= 1 && $input.val()<=9){
            $input.val(function(i, oldval){
                return ++oldval;
            })
        }
    });
    $qty_down.click(function(){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($input.val() > 1 && $input.val()<=10){
            $input.val(function(i, oldval){
                return --oldval;
            })
        }
    });
})

