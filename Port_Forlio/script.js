$(document).ready (function(){
    $(window).scroll(function(){
       if(this.scrollY > 20) {
           $('.navbar').addClass("sticky");
       } else {
            $('.navbar').removeClass("sticky");
       }
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed (".typing", {
        Strings: ["YouTuber", "Developer", "Blogger", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed (".typing-2", {
        Strings: ["YouTuber", "Developer", "Blogger", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }

        }
    });

   /* // email function
    function sendMail(params) {
        var tempParams = {
            from_name:document.getElementById("fromName").value,
            to_name:document.getElementById("fromEmail").value,
            subject:document.getElementById("subject").value,
            message:document.getElementById("message").value,
        };
    
        emailjs.send('service_xnnnegc', 'template_cv75mjm', tempParams)
        .then(function(res){
            console.log("success", res.status)
        });
    };*/

});
