import Porsche from "./porsche.js";
import TextType from "./textType.js";
import MusicPlayer from "./musicPlayer.js";
import Question from "./end.js";

const mainContainer = document.getElementById("main");
const porsche = new Porsche();
const question = new Question();

const letterText = "Its funny we started off rocky and thinking oh shes just a fling. I never saw myself being in another serious relationship with someone for a while or even care this much about someone. I was so sure that I wasn't ready for anything serious because I felt so broken. Yet, here I am, being a better partner for you and learning to just be a better person everyday. Because with you, the fog isn't as foggy anymore, my head is more clear. I'm an engineer so I'm never 100% confident about anything, but I am 100% confident on wanting to be with you, wanting to kiss you, wanting to hold you, marrying you, and building this life with kids and cars with you. You're the first person I wanna work hard for to achieve our future goals and do things I have never done for anyone before. Its like you take my logic away and theres just this giant feeling of love where I wanna squish you all the time. I love the things we do together. Us sitting in the car talking/chilling, hearing you yap about your job along with other things that happen, seeing you smile, the way you touch my arm and grab me, the way you hug me from behind, and just everything in between. I love the way we just fit and understand each other. I love you lots :)";

const remindSong = () => {
  const title = document.getElementById("music-title");

  if (title.textContent === "Street Lights") {
    makeMusicType(
      "Belong Together",
      "Mark Ambor",
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
    const text = new TextType([letterText], () => {
      mainContainer.innerHTML = "";
      mainContainer.style = "";
      mainContainer.innerHTML = question.render();
      question.init();
    }, false, 'p');
    const containDiv = document.createElement("div");
    containDiv.style.display = "flex";
    containDiv.style.justifyContent = "center";
    containDiv.style.alignContent = "center";
    containDiv.style.flexDirection = "column";
    containDiv.style.gap = "40px";
    containDiv.style.height = "100vh";
    containDiv.style.maxWidth = "80%";
    containDiv.appendChild(text.render());
    mainContainer.appendChild(containDiv);
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
  containDiv.style.maxWidth = "80%";
  const text = new TextType([textType], typeFunc);
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
      ["HI BABY :) LET ME TAKE YOU ON A JOURNEY."],
      swipe
    );
    document.getElementById("content").appendChild(text.render());
    document.getElementById("heart-stage").style.animation =
      "swipe-right 7s ease-in-out infinite";
  });
});
