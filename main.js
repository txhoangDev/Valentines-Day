import Porsche from "./porsche.js";
import TextType from "./textType.js";
import MusicPlayer from "./musicPlayer.js";
import Question from "./end.js";

const mainContainer = document.getElementById("main");
const porsche = new Porsche();
const question = new Question();

const remindSong = () => {
  const title = document.getElementById("music-title");

  if (title.textContent === "Street Lights") {
    makeMusicType(
      "One Of The Girls",
      "The Weeknd, JENNIE & Lily Rose Depp",
      "THE SONG THAT REMINDS ME OF YOU",
      remindSong
    );
  } else if (title.textContent === "One Of The Girls") {
    makeMusicType(
      "Nonsense",
      "Sabrina Carpenter",
      "THE SONG THAT DESCRIBES HOW I FEEL ABOUT YOU",
      remindSong,
      true
    );
  } else {
    mainContainer.innerHTML = "";
    mainContainer.innerHTML = question.render();
    question.init();
  }
};

const makeMusicType = (
  songTitle,
  songArtist,
  textType,
  typeFunc,
  lastSong = false
) => {
  const containDiv = document.createElement("div");
  containDiv.style.display = "flex";
  containDiv.style.justifyContent = "center";
  containDiv.style.alignContent = "center";
  containDiv.style.flexDirection = "column";
  containDiv.style.gap = "40px";
  containDiv.style.height = "100vh";
  const text = new TextType(textType, typeFunc, true);
  const music = new MusicPlayer(songArtist, songTitle);
  containDiv.innerHTML = music.render();
  if (lastSong) {
    containDiv.querySelector(".music-card").style.animation =
      "zoom-out 7s ease-out forwards";
  }
  containDiv.appendChild(text.render());
  mainContainer.innerHTML = "";
  mainContainer.appendChild(containDiv);
};

const swipe = () => {
  mainContainer.innerHTML = "";
  mainContainer.innerHTML = porsche.render();
  setTimeout(() => {
    makeMusicType(
      "Street Lights",
      "Kanye West",
      "THE SONG THAT STARTED IT ALL",
      remindSong
    );
  }, 6000);
};

document.addEventListener("DOMContentLoaded", () => {
  const heart = document.getElementById("heart");
  heart.addEventListener("click", () => {
    heart.classList.toggle("is-active");
    const text = new TextType(
      "HI BABY :) LET ME TAKE YOU ON A JOURNEY.",
      swipe
    );
    document.getElementById("content").appendChild(text.render());
    document.getElementById("heart-stage").style.animation =
      "swipe-right 7s ease-in-out infinite";
  });
});
