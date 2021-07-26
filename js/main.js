//header animation-------
headerAni();
function headerAni() {
  const header = document.querySelector("#header");
  document.addEventListener("scroll", function () {
    const winTop = document.documentElement.scrollTop;
    const headerTP = 600;
    if (winTop >= headerTP) {
      header.classList.add("on");
    } else {
      header.classList.remove("on");
    }
  });
}
headerAni();

//slide funtion-----------------------

let indexNum = 0;
const slideUl = document.querySelector("#mainSlide"); // Slide
const conSlide = document.querySelector("#conSlide");

function clicknum(n) {
  slideUl.style.transform = "translateX(-" + n * 960 + "px)";
}

function prebNextbtn(n) {
  const btnPrev = document.querySelector(".pre-btn");
  const btnNext = document.querySelector(".nex-btn");

  let num = (indexNum += n);

  if (num >= 2) {
    btnNext.style.display = "none";
  } else {
    btnNext.style.display = "block";
  }
  if (num == 0) {
    btnPrev.style.display = "none";
  } else {
    btnPrev.style.display = "block";
  }

  showSlides(num);
}

function prebNextcon(n) {
  const btnPrev = document.querySelector(".conPre");
  const btnNext = document.querySelector(".conNex");
  let num = (indexNum += n);

  if (num >= 2) {
    btnNext.style.display = "none";
  } else {
    btnNext.style.display = "block";
  }
  if (num == 0) {
    btnPrev.style.display = "none";
  } else {
    btnPrev.style.display = "block";
  }

  conShowSlides(num);
}

function showSlides(n) {
  console.log(n);

  slideUl.style.transform = "translateX(-" + n * 960 + "px)";
}
function conShowSlides(n) {
  console.log(n);

  conSlide.style.transform = "translateX(-" + n * 960 + "px)";
}
