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
    var typed = new Typed ('.typing', {
        strings: ["YouTuber...", "Developer...", "Blogger...", "Designer..."],
        typeSpeed: 300,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed (".typing-2", {
        strings: ["YouTuber...", "Developer...", "Blogger...", "Designer..."],
        typeSpeed: 200,
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


















//your web  app's firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCuUa4X0nHF03xE0RS5gIcSes4EfGB4Htc",
    authDomain: "form-test-c6780.firebase.com",
    databaseUrl: "https://form-test-c6780.firebaseio.com",
    projectId: "form-test-c6780",
    storageBucket: "form-test-c6780.appspot.com",
    messagingSenderId: "900825576170",
    appId: "1:900825576170:web:cb6f1bb9f31e351c2f1d93",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference contactInfo collections
let contactInfo = firebase.database().ref("infos");

// listen for a submit
document.querySelector(".emailform").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    // get input values
    let nameinput = document.querySelector(".nameinput").value;
    let emailinput = document.querySelector(".emailinput").value;
    let subjectinput = document.querySelector(".subjectinput").value;
    let textareainput = document.querySelector(".textareainput").value;

    saveContactInfo(nameinput, emailinput, subjectinput, textareainput);

    document.querySelector(".emailform").reset();

    sendEmail(nameinput, emailinput, subjectinput, textareainput);
}

// save info to firebase
function saveContactInfo(nameinput, emailinput, subjectinput, textareainput) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        nameinput: nameinput,
        emailinput: emailinput, 
        subjectinput: subjectinput, 
        textareainput: textareainput,
    });

    retrieveInfos();
}

// retrieve infos
function retrieveInfos() {
    let ref = firebase.database().ref("infos");
    ref.on("value", gotData);
}

function gotData(data) {
    let info = data.val();
    let keys = Object.keys(info);

    for (let i = 0; i < keys.length; i++) {
        let infoData = keys[i];
        let nameinput = info[infoData].nameinput;
        let  emailinput = info[infoData].emailinput;
        let subjectinput = info[infoData].subjectinput;
        let textareainput = info[infoData].textareainput;
        console.log(nameinput, emailinput, subjectinput, textareainput);

        let infosResults = document.querySelector(".infosResults");

        infosResults.innerHTML += <div>
            <p><strong>Name: </strong>${nameinput}<br/>
            <a><strong>Email: </strong>${emailinput}</a><br/>
            <a><strong>Subject: </strong>${subjectinput}</a><br/><br/>
            <a><strong>Message: </strong>${textareainput}</a></p>
        </div>
    }
}

retrieveInfos(); 


// send email info
function sendEmail(nameinput, emailinput, subjectinput, textareainput) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'iemmzzyhost@gmail.com',
        Password: "dscpcxkpdiqddtal",
        To: 'iemmzzyhost@gmail.com',
        From: 'iemmzzyhost@gmail.com',
        Subject: '${nameinput} send you a message about ${subjectemail}',
        Body: 'Name: ${nameinput} <br/>  Email: ${emailinput} <br/> Message: ${textareainput}',
    }).then((message) => alert("email sent Succefully....Thanks"));
}