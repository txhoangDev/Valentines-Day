export default class TextType {
  constructor(text, onAnimationEnd) {
      this.message = text;
      this.endFunction = onAnimationEnd;
  }

  render() {
      const container = document.createElement('div');
      container.style.paddingTop = '5em';
      container.style.display = 'flex';
      container.style.justifyContent = 'center';

      const style = document.createElement('style');
      style.innerHTML = `
          .typewriter h1 {
              color: white;
              font-family: monospace;
              overflow: hidden; 
              border-right: 0.15em solid orange; 
              white-space: nowrap; 
              margin: 0 auto; 
              letter-spacing: 0.15em; 
              animation: typing-deleting 7s steps(30, end),
              blink-caret 0.5s step-end infinite;
          }

          @keyframes typing {
              from {
                  width: 0;
              }
              to {
                  width: 100%;
              }
          }

          @keyframes deleting {
              from {
                  width: 100%;
              }
              to {
                  width: 0;
              }
          }

          @keyframes typing-deleting {
            0% {
                width: 0; /* Start with nothing typed */
            }
            50% {
                width: 100%; /* End of typing phase */
            }
            75% {
                width: 100%; /* Pause for 2 seconds at full text */
            }
            100% {
                width: 0; /* End of deleting phase */
            }
            }

          @keyframes blink-caret {
              from,
              to {
                  border-color: transparent;
              }
              50% {
                  border-color: orange;
              }
          }
      `;
      document.head.appendChild(style);

      const typewriterDiv = document.createElement('div');
      typewriterDiv.classList.add('typewriter');
      
      const h1 = document.createElement('h1');
      h1.textContent = this.message;
      typewriterDiv.appendChild(h1);
      container.appendChild(typewriterDiv);

      document.body.appendChild(container);

      h1.addEventListener('animationend', () => {
        if (this.endFunction) {
            this.endFunction();
        }
      });

      return container; 
  }
}
