// nav items
let item1 = document.getElementById("nav-items-01");
let item2 = document.getElementById("nav-items-02");
let item3 = document.getElementById("nav-items-03");
let about = document.querySelector(".about");
let connect = document.querySelector(".footer");
let skill = document.querySelector(".head-work");
let btn = document.querySelector("#connect");

// Automatically scroll to the top on page load (refresh)
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.onload = function() {
    scrollToTop();
};

// go to event to particular section of nav
item1.addEventListener("click",()=>{
    about.scrollIntoView({behavior: "smooth"});
})
item1.addEventListener("touchstart",()=>{
    about.scrollIntoView({behavior: "smooth"});
    item1.style.backgroundColor=" rgb(17, 67, 17)";
    item1.style.borderRadius="0.625rem";
})
item1.addEventListener("mouseenter",()=>{
    item1.style.backgroundColor=" rgb(17, 67, 17)";
    item1.style.cursor="pointer";
    item1.style.textDecoration="underline";
    item1.style.borderRadius="0.625rem";
})
item1.addEventListener("mouseleave", ()=>{
    item1.style.backgroundColor="";
    item1.style.borderRadius="";
    item1.style.cursor="";
    item1.style.textDecoration="";
})


item2.addEventListener("click",()=>{
    connect.scrollIntoView({behavior: "smooth"})
})
item2.addEventListener("touchstart",()=>{
    about.scrollIntoView({behavior: "smooth"});
    item2.style.backgroundColor=" rgb(17, 67, 17)";
    item2.style.borderRadius="0.625rem";
})
item2.addEventListener("mouseenter",()=>{
    item2.style.backgroundColor=" rgb(17, 67, 17)";
    item2.style.cursor="pointer";
    item2.style.textDecoration="underline";
    item2.style.borderRadius="0.625rem";
})
item2.addEventListener("mouseleave", ()=>{
    item2.style.backgroundColor="";
    item2.style.borderRadius="";
    item2.style.cursor="";
    item2.style.textDecoration="";
})


item3.addEventListener("click",()=>{
    skill.scrollIntoView({behavior: "smooth"})
})
item3.addEventListener("touchstart",()=>{
    about.scrollIntoView({behavior: "smooth"});
    item3.style.backgroundColor=" rgb(17, 67, 17)";
    item3.style.borderRadius="0.625rem";
})
item3.addEventListener("mouseenter",()=>{
    item3.style.backgroundColor=" rgb(17, 67, 17)";
    item3.style.cursor="pointer";
    item3.style.textDecoration="underline";
    item3.style.borderRadius="0.625rem";
})
item3.addEventListener("mouseleave", ()=>{
    item3.style.backgroundColor="";
    item3.style.borderRadius="";
    item3.style.cursor="";
    item3.style.textDecoration="";
})

btn.addEventListener("click",()=>{
    window.location.href="mailto:2241014@sliet.ac.in"
})

// Add a scroll event listener
document.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    
    // Check if the user has scrolled past the navigation bar
    if (window.scrollY > nav.offsetHeight) {
        // If yes nb, add a class to make it sticky
        nav.classList.add('sticky');
    } else {
        // If not, remove the class
        nav.classList.remove('sticky');
    }
});

// view buttons
let view1 = document.getElementById("view-01");
view1.addEventListener("click",()=>{
    let link1="/Sign up page/sign.png";
    window.open(link1,"_blank");
})

let view2 = document.getElementById("view-02");
view2.addEventListener("click",()=>{
    let link2="card.jpg";
    window.open(link2,"_blank");
})

let view3 = document.getElementById("view-03");
view3.addEventListener("click",()=>{
    let link3="pic-01.png";
    window.open(link3,"_blank");
})

// footer icons
// email icon
// function for click event
let icon1 = document.getElementById("img-01");
function doMail(){
    icon1.addEventListener("click",()=>{
        let url="mailto:2241014@sliet.ac.in";
        window.open(url,"_blank");
    })
}
// function for hover effect
icon1.addEventListener("mouseenter", ()=>{
    doMail();
    icon1.style.transition="all 0.2s ease-in-out 0s";
    icon1.src="/Images/email-e1.png";
    icon1.style.border="2px solid black";
    icon1.style.backgroundColor="azure";
})
// function for removing hover effect
icon1.addEventListener("mouseleave", ()=>{
    icon1.style.transition="all 0.1s ease-in-out 0s";
    icon1.src="/Images/email-e0.png";
    icon1.style.backgroundColor="";
    icon1.style.border="1px solid black";
})
icon1.addEventListener("touchstart",()=>{
    doMail();
    icon1.style.transition="all 0.1s ease-in-out 0s";
    icon1.src="/Images/email-e1.png";
    icon1.style.border="2px solid black";
    icon1.style.backgroundColor="azure";
})


// insta icon
let icon2 = document.getElementById("img-02");
function openInstagram(){
    icon2.addEventListener("click",()=>{
        let url="https://www.instagram.com/aniket_sriv_0810?igsh=ZjMwdnB2bXltcjZs";
        window.open(url,"_blank");
    })
}

icon2.addEventListener("touchstart",()=>{
    doMail();
    icon2.style.transition="all 0.1s ease-in-out 0s";
    icon2.src="/Images/arrow-new.png";
    icon2.style.border="2px solid black";
    icon2.style.backgroundColor="azure";
})

icon2.addEventListener("mouseenter", ()=>{
    openInstagram();
    icon2.style.transition="all 0.2s ease-in-out 0s";
    icon2.src="/Images/insta-color.png";
    icon2.style.border="2px solid black";
    icon2.style.backgroundColor="azure";
})

icon2.addEventListener("mouseleave", ()=>{
    icon2.style.transition="all 0.1s ease-in-out 0s";
    icon2.src="/Images/insta-c0.png";
    icon2.style.backgroundColor="";
    icon2.style.border="1px solid black";
})

// youtube icon
let icon3 = document.getElementById("img-03");
function openYoutube(){
    icon3.addEventListener("click",()=>{
       let url = "https://youtube.com/@aniketsrivastava6198?feature=shared";
       window.open(url , "_blank");
    })
}

icon3.addEventListener("mouseenter", ()=>{
    openYoutube();
    icon3.style.transition="all 0.2s ease-in-out 0s";
    icon3.src="/Images/youtube-y1.png";
    icon3.style.backgroundColor="azure";
    icon3.style.border="2px solid black";
    icon3.style.border="2px solid black";
})

icon3.addEventListener("mouseleave", ()=>{
    icon3.style.transition="all 0.1s ease-in-out 0s";
    icon3.src="/Images/utube.png";
    icon3.style.backgroundColor="";
})
icon3.addEventListener("touchstart",()=>{
    doMail();
    icon3.style.transition="all 0.1s ease-in-out 0s";
    icon3.src="/Images/youtube-y1.png";
    icon3.style.border="2px solid black";
    icon3.style.backgroundColor="azure";
})
