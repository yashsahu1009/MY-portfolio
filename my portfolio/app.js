
const option = {
    threshold: 0.1,
};

const observerhll = new IntersectionObserver((enties) => {
    enties.forEach((entry) => {
        if(entry.isIntersecting)
            {
                entry.target.classList.add("text-show");
            }
            else{
                entry.target.classList.remove("text-show");
            }
        })
    } , option)

    const hll = document.querySelectorAll(".nav");
    hll.forEach((se) => {
        observerhll.observe(se);
    })
    
    console.log("harsh jjjjjj ")
    
    
    
    const option1 = {
        threshold: 0.1,
    };
const observer = new IntersectionObserver((enties) => {
    enties.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }
    });
}, option1);
const sections = document.querySelectorAll(".hll");
 sections.forEach((sec) => {
    observer.observe(sec);
 });






const aboutdata = new IntersectionObserver((sec) => {
     sec.forEach((s) => {
        if(s.isIntersecting){
            s.target.classList.add("about-show");
        }
        else{
            s.target.classList.remove("about-show");
        }
     })
},option);

const about = document.querySelectorAll(".text-about-right");
 about.forEach((data) => {
    aboutdata.observe(data);
 })




const linedata = new IntersectionObserver((sec) => {
     sec.forEach((s) => {
        if(s.isIntersecting){
            s.target.classList.add("line-show");
        }
        else{
            s.target.classList.remove("line-show");
        }
     })
},option);

const line = document.querySelectorAll(".per-line");
 line.forEach((data) => {
    linedata.observe(data);
 })




const rounddata = new IntersectionObserver((sec) => {
     sec.forEach((s) => {
        if(s.isIntersecting){
            s.target.classList.add("round-show");
        }
        else{
            s.target.classList.remove("round-show");
        }
     })
},option);

const round = document.querySelectorAll(".creativity");
 round.forEach((data) => {
    rounddata.observe(data);
 })




const photo1data = new IntersectionObserver((sec) => {
     sec.forEach((s) => {
        if(s.isIntersecting){
            s.target.classList.add("photo1-show");
        }
        else{
            s.target.classList.remove("photo1-show");
        }
     })
},option);
const photo1 = document.querySelectorAll(".row1");
 photo1.forEach((data) => {
    photo1data.observe(data);
 })




const photo2data = new IntersectionObserver((sec) => {
     sec.forEach((s) => {
        if(s.isIntersecting){
            s.target.classList.add("photo2-show");
        }
        else{
            s.target.classList.remove("photo2-show");
        }
     })
},option);

const photo2 = document.querySelectorAll(".row2");
 photo2.forEach((data) => {
    photo2data.observe(data);
 })


const photo3data = new IntersectionObserver((sec) => {
     sec.forEach((s) => {
        if(s.isIntersecting){
            s.target.classList.add("photo3-show");
        }
        else{
            s.target.classList.remove("photo3-show");
        }
     })
},option);

const photo3 = document.querySelectorAll(".row3");
 photo3.forEach((data) => {
    photo3data.observe(data);
 })






 const contactdata = new IntersectionObserver((sec) => {
    sec.forEach((s) => {
       if(s.isIntersecting){
           s.target.classList.add("contact-show");
       }
       else{
           s.target.classList.remove("contact-show");
       }
    })
},option);

const contact = document.querySelectorAll(".contact-left");
contact.forEach((data) => {
   contactdata.observe(data);
})


// const about = querySelectorAll(".text-about-right");
// about.forEach((sec) => {
//     observer.observe(sec);
// });



// document.addEventListener("contextmenu" , (event)=> {
//     alert("Don't Try to access code !");
//     event.preventDefault();
// })

// let hbc = document.querySelector("#hbclick");


let btn = document.querySelector("#hbclick");
let body = document.querySelector(".humburgeroption");
let close = document.querySelector(".closeburger");
let currmode = "light";
let hbanker = document.querySelector("#hbanker");

btn.addEventListener("click" , () => {
    if(currmode==="light")
        {
            currmode = "dark";
            body.style.display="block";
            btn.src="can.png";
            
        }
        else {
            currmode = "light";
            body.style.display="none";
            btn.src="image/bll.png";
        }
});

hbanker.addEventListener("click" ,() => {
    body.style.display="none";
    btn.src="image/bll.png";
})
// function changeImage(a) {
//     btn.src="cancel.png";
   

// }
document.addEventListener("DOMContentLoaded", () => {
    var typed = new Typed(".typing", {
      strings: ["Web Designer", "Web Developer", "Frontend Developer", "Backend Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  });
 
 
 
 
 
 

