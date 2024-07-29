const images = document.querySelectorAll(".aboutImg");
const sliderLine = document.querySelector(".about_slider-line");
const slider = document.querySelector(".about_slider");
let count = 0;
let width;
let interval;

function init() {
  console.log("resize");
  width = slider.offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider();
}
window.addEventListener("resize", init);
init();

document.querySelector(".slider_prew").addEventListener("click", prew);
function prew() {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
}

document.querySelector(".slider_next").addEventListener("click", next);
function next() {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
}

function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}

// swipe
slider.addEventListener("touchstart", handleTouchStart, false);
slider.addEventListener("touchmove", handleTouchMove, false);

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
  const firstTouch = event.touches[0];
  x1 = firstTouch.clientX;
  y1 = firstTouch.clientY;
}

function handleTouchMove(event) {
  if (!x1 || !y1) {
    return false;
  }
  let x2 = event.touches[0].clientX;
  let y2 = event.touches[0].clientY;
  let xDiff = x2 - x1;
  let yDiff = y2 - y1;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff < 0) {
      next();
    } else {
      prew();
    }
  }
  x1 = null;
  y1 = null;
}

// autoplay
function startAutoplay() {
  interval = setInterval(next, 3000); // Change slide every 3 seconds
}

function stopAutoplay() {
  clearInterval(interval);
}

slider.addEventListener("mouseenter", stopAutoplay);
slider.addEventListener("mouseleave", startAutoplay);

startAutoplay();

// slider fadeIn
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".advantages_text li");
  const images = document.querySelectorAll(".carousel_advantages div");
  let currentIndex = 0;

  function showNext() {
    items.forEach((item) => (item.style.opacity = 0.3));
    images.forEach((image) => (image.style.zIndex = 0));

    items[currentIndex].style.opacity = 1;
    images[currentIndex].style.zIndex = 1;
    images[currentIndex].classList.add("active");

    currentIndex = (currentIndex + 1) % items.length;
  }

  showNext();
  setInterval(() => {
    images[currentIndex].classList.remove("active");
    showNext();
  }, 4000);
});

// slider before after
const sliderRes = document.querySelector(".slider_results");
const before = document.querySelector(".before");
const beforeImage = before.querySelector("img");
const change = document.querySelector(".change");
const body = document.body;

let isActive = false;

function size() {
  let width = sliderRes.offsetWidth;
  beforeImage.style.width = `${width}px`;
}
window.addEventListener("resize", size);
size();

change.addEventListener("mousedown", () => {
  isActive = true;
});

body.addEventListener("mouseup", () => {
  isActive = false;
});

body.addEventListener("mouseleave", () => {
  isActive = false;
});

const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, sliderRes.offsetWidth));
  before.style.width = `${shift}px`;
  change.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

body.addEventListener("mousemove", (e) => {
  if (!isActive) {
    return;
  }

  let x = e.pageX;
  x -= sliderRes.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});

change.addEventListener("touchstart", () => {
  isActive = true;
});

body.addEventListener("touchend", () => {
  isActive = false;
});

body.addEventListener("touchcancel", () => {
  isActive = false;
});

body.addEventListener("touchmove", (e) => {
  if (!isActive) {
    return;
  }

  let x;

  let i;
  for (i = 0; i < e.changedTouches.length; i++) {
    x = e.changedTouches[i].pageX;
  }

  x -= sliderRes.getBoundingClientRect().left;

  beforeAfterSlider(x);
  pauseEvents(e);
});

// before after image change
document.querySelectorAll(".elseResults img").forEach((img, index) => {
  img.addEventListener("click", () => {
    const beforeImg = document.querySelector(".before img");
    const afterImg = document.querySelector(".after img");

    switch (index) {
      case 0:
        beforeImg.src = "img/beforeFirst.jpg";
        afterImg.src = "img/afterFirst.jpg";
        break;
      case 1:
        beforeImg.src = "img/beforeSecond.jpg";
        afterImg.src = "img/afterSecond.jpg";
        break;
      case 2:
        beforeImg.src = "img/beforeThird.jpg";
        afterImg.src = "img/afterThird.jpg";
        break;
      case 3:
        beforeImg.src = "img/beforeFour.jpg";
        afterImg.src = "img/afterFour.jpg";
        break;
      case 4:
        beforeImg.src = "img/beforeFive.jpg";
        afterImg.src = "img/afterFive.jpg";
        break;
    }
  });
});
