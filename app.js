const imageDivsContainer = document.querySelector(".carousel-1 .image-divs-container");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

let active = 0;
let left = 0;
let imgDivWidth = document.querySelector(".img-div").offsetWidth+20;

leftBtn.addEventListener("click", () => {
  if(active > 0) {
    active -= 1;
    left += imgDivWidth;
    imageDivsContainer.style.left = `${left}px`;
    console.log(active,left);
  } else if(active === 0) {
    active = 3;
    left = -(active * imgDivWidth);
    imageDivsContainer.style.left = `${left}px`;
  }
});

rightBtn.addEventListener("click", () => {
  if(active < 3) {
    active += 1;
    left -= imgDivWidth;
    imageDivsContainer.style.left = `${left}px`;
    console.log(active,left);
  } else if(active === 3) {
    active = 0;
    left = 0;
    imageDivsContainer.style.left = `${left}px`;
  }
})

window.addEventListener('resize', () => {
  imgDivWidth = document.querySelector(".img-div").offsetWidth+20;
  left = -(active * imgDivWidth);
  imageDivsContainer.style.left = `${left}px`;
});