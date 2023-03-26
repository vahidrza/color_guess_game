const start = document.getElementById("start");
const colors = document.getElementById("colors");
const form = document.getElementById("myForm");
const easy = document.getElementById("easy");
const hard = document.getElementById("hard");
const value = document.getElementById("value");
const result = document.getElementById("result");
const score = document.getElementById("score");

let color = [];
let myColors = [];
let myValue;
let win = 0;
let lose =0;

(() => {
  //It is eventListeners() function
  start.addEventListener("click", starttheGame);
})();

function starttheGame() {
  result.innerHTML = "";
  color = [];
  myColors = [];
  colors.style.display = "flex";
  colors.style.justifyContent = "space-around";
  colors.style.minHeight = "30vh";

  let myCount = hard.checked ? 6 : 3;
  while (colors.hasChildNodes()) {
    colors.removeChild(colors.firstChild);
  }

  for (let index = 1; index <= myCount; index++) {
    const child = document.createElement("div");
    child.className = "childitem";
    child.onclick = () => {
      result.innerHTML = "Try Again";
      result.style.fontSize = "5em"
      result.style.color = "red";
      colors.style.display = "none";
      lose++;
      score.innerHTML=`Current Score - Win:${win} ; Lose:${lose}`
    };
    colors.appendChild(child);
  }

  for (let index = 0; index < myCount; index++) {
    for (let index = 0; index <= 2; index++) {
      color[index] = Math.floor(Math.random() * 255);
    }
    colors.childNodes[
      index
    ].style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
    myColors[index] = [color[0], color[1], color[2]];
  }

  myValue = Math.floor(Math.random() * myCount);
  console.log(myValue);
  value.innerHTML = `RGB(${myColors[myValue][0]},${myColors[myValue][1]},${myColors[myValue][2]})`;
  colors.childNodes[myValue].onclick = () => {
    result.style.fontSize = "5em"
    result.style.color = "green";
    result.innerHTML = "You Win";
    colors.style.display = "none";
    win++;
    score.innerHTML=`Current Score - Win:${win} ; Lose:${lose}`
  };
}

