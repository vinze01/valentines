const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const flowersBtn = document.querySelector(".flowers");

flowersBtn.style.display = "none"; // Hide the flowers button initially

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you! 😘";
  gif.style.width = "350px";
  gif.style.height = "700px";
  gif.src =
    "/ksh.gif";

  // Show the flowers button and hide Yes and No buttons
  flowersBtn.style.display = "inline-block";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

flowersBtn.addEventListener("click", () => {
  const flowersGIF = document.createElement("img");
  flowersGIF.src = "https://media.giphy.com/media/K51Nva4IXroB2zwaVR/giphy.gif";
  flowersGIF.width = 400;
  flowersGIF.height = 480;

  // Remove the existing GIF
  gif.style.display = "none";

  wrapper.appendChild(flowersGIF);

  flowersBtn.style.display = "none";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});
