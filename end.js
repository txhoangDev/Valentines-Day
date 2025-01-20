export default class Question {
    constructor() {}
  
    render() {
      return `
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
          "
        >
          <style>
            #gif {
              height: 100%;
              width: 100%;
              cursor: zoom-in;
            }
  
            #gif:active {
              transform: scale3d(1.3, 1.3, 1.3);
            }
  
            h2 {
              text-align: center;
              font-size: 1.5em;
              color: #e94d58;
              margin: 15px 0;
            }
  
            #btn-group {
              width: 100%;
              height: 50px;
              display: flex;
              justify-content: center;
              margin-top: 50px;
            }
  
            button {
              position: absolute;
              width: 150px;
              height: inherit;
              color: white;
              font-size: 1.2em;
              border-radius: 30px;
              outline: none;
              cursor: pointer;
              box-shadow: 0 2px 4px gray;
              border: 2px solid #e94d58;
              font-size: 1.2em;
            }
  
            button:nth-child(1) {
              margin-left: -200px;
              background: #e94d58;
            }
  
            button:nth-child(2) {
              margin-right: -200px;
              background: white;
              color: #e94d58;
            }
  
            #no-btn {
              cursor: not-allowed;
            }
          </style>
          <div id="wrapper">
            <h2 id="question">Will you be my valentine?</h2>
            <img
              id="gif"
              alt="gif"
              src="https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif"
            />
            <div id="btn-group">
              <button id="yes-btn">Yes</button>
              <button id="no-btn">No</button>
            </div>
          </div>
        </div>
      `;
    }
  
    init() {
      const wrapper = document.getElementById("wrapper");
      const question = document.getElementById("question");
      const gif = document.getElementById("gif");
      const yesBtn = document.getElementById("yes-btn");
      const noBtn = document.getElementById("no-btn");
  
      yesBtn.addEventListener("click", () => {
        question.innerHTML = "Yay, see you on the 14th of Feb!";
        gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
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
    }
  }
  