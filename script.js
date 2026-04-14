const nameElement = document.getElementById("name");
const textElement = document.getElementById("text");
const choicesElement = document.getElementById("choices");

const bgElement = document.getElementById("background");

const leftChar = document.getElementById("characterLeft");
const centerChar = document.getElementById("characterCenter");
const rightChar = document.getElementById("characterRight");

let typingSpeed = 120;

function typeText(text, callback) {
  textElement.innerText = "";

  let words = text.split(" ");
  let i = 0;

  const interval = setInterval(() => {
    textElement.innerText += words[i] + " ";
    i++;

    if (i >= words.length) {
      clearInterval(interval);
      callback();
    }
  }, typingSpeed);
}

function showScene(sceneKey) {
  const scene = story[sceneKey];

  nameElement.innerText = scene.name;
  bgElement.style.backgroundImage = `url(${scene.bg})`;

  leftChar.style.display = scene.left ? "block" : "none";
  centerChar.style.display = scene.center ? "block" : "none";
  rightChar.style.display = scene.right ? "block" : "none";

  leftChar.src = scene.left || "";
  centerChar.src = scene.center || "";
  rightChar.src = scene.right || "";

  leftChar.classList.remove("active", "inactive");
  centerChar.classList.remove("active", "inactive");
  rightChar.classList.remove("active", "inactive");

  if (scene.active === "left") {
    leftChar.classList.add("active");
    centerChar.classList.add("inactive");
    rightChar.classList.add("inactive");
  }

  if (scene.active === "center") {
    centerChar.classList.add("active");
    leftChar.classList.add("inactive");
    rightChar.classList.add("inactive");
  }

  if (scene.active === "right") {
    rightChar.classList.add("active");
    leftChar.classList.add("inactive");
    centerChar.classList.add("inactive");
  }

  choicesElement.innerHTML = "";

  typeText(scene.text, () => {
    scene.choices.forEach((choice) => {
      const btn = document.createElement("button");
      btn.innerText = choice.text;
      btn.onclick = () => showScene(choice.next);
      choicesElement.appendChild(btn);
    });
  });
}

showScene("start");
