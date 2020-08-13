let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let result = document.querySelector(".result");

let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);

let randomImage1 = `images/dice${randomNumber1}.png`;
let randomImage2 = `images/dice${randomNumber2}.png`;

img1.setAttribute("src", randomImage1);
img2.setAttribute("src", randomImage2);

if (randomNumber1 === randomNumber2) {
  result.innerHTML = "DRAW !!";
} else if (randomNumber1 > randomNumber2) {
  result.innerHTML = "🚩 Player1 Win!!";
} else {
  result.innerHTML = "Player2 Win!! 🚩";
}
