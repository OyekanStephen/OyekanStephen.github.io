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



// oh fucking stressful slideshow starts here
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





    
    //  typing effect starts here
    var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
  };

  window.onload = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
  };
  // typing effect ends here
