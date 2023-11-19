let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}
// toggle theme ends here 



// oh fucking stressful slide starts here
let slideIndex1 = 0;
let slideIndex2 = 0;
let slideIndex3 = 0;
let slideIndex4 = 0;
let slideIndex5 = 0;
let slideIndex6 = 0;

showSlides(1, "mySlides", "dot");
showSlides(2, "mySlides2", "dot2");
showSlides(3, "mySlides3", "dot3");
showSlides(4, "mySlides4", "dot4");
showSlides(5, "mySlides5", "dot5");
showSlides(6, "mySlides6", "dot6");

function showSlides(slideSetIndex, slideClass, dotClass) {
  const interval = 2000; // Change image every 2 seconds

  let slides = document.querySelectorAll(`.${slideClass}`);
  let dots = document.querySelectorAll(`.${dotClass}`);

  function updateSlide() {
    let i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].classList.remove("active");
    }

    if (slideSetIndex === 1) {
      slides[slideIndex1].style.display = "block";
      dots[slideIndex1].classList.add("active");
      slideIndex1++;
      if (slideIndex1 >= slides.length) {
        slideIndex1 = 0;
      }
    } else if (slideSetIndex === 2) {
      slides[slideIndex2].style.display = "block";
      dots[slideIndex2].classList.add("active");
      slideIndex2++;
      if (slideIndex2 >= slides.length) {
        slideIndex2 = 0;
      }
    }
     else if (slideSetIndex === 3) {
      slides[slideIndex3].style.display = "block";
      dots[slideIndex3].classList.add("active");
      slideIndex3++;
      if (slideIndex3 >= slides.length) {
        slideIndex3 = 0;
      }
    }
     else if (slideSetIndex === 4) {
      slides[slideIndex4].style.display = "block";
      dots[slideIndex4].classList.add("active");
      slideIndex4++;
      if (slideIndex4 >= slides.length) {
        slideIndex4 = 0;
      }
    }
     else if (slideSetIndex === 5) {
      slides[slideIndex5].style.display = "block";
      dots[slideIndex5].classList.add("active");
      slideIndex5++;
      if (slideIndex5 >= slides.length) {
        slideIndex5 = 0;
      }
    }
     else if (slideSetIndex === 6) {
      slides[slideIndex6].style.display = "block";
      dots[slideIndex6].classList.add("active");
      slideIndex6++;
      if (slideIndex6 >= slides.length) {
        slideIndex6 = 0;
      }
    }
  }

  setInterval(updateSlide, interval);
}
// slides ends here



//   contact form email send js
    function sendEmail(){
        Email.send({
            Host : "smtp.gmail.com",
            Username : "stephenoyekan6@gmail.com",
            Password : "1181571223748F93ADF9A4D3E2D290C6147E",
            To : 'oyekanstephen8@gmail.com',
            From : document.getElementById("email").value,
            Subject : "new contact form enquiry",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
    }