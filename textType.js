export default class TextType {
    constructor(text, onAnimationEnd, doBack=true, elementType="h1") {
      this.strings = text; 
      this.onAnimationEnd = onAnimationEnd;
      this.typeSpeed = 50; 
      this.startDelay = 1500;
      this.backSpeed = 50;
      this.backDelay = 1000;
      this.doBack = doBack;
      this.elementType = elementType;
    }
  
    render() {
      const container = document.createElement('div');
      container.style.paddingTop = '5em';
      container.style.display = 'flex';
      container.style.textAlign = 'center';
      container.style.justifyContent = 'center';
  
      const typewriterDiv = document.createElement('div');
      typewriterDiv.classList.add('typewriter');
  
      const h1 = document.createElement(this.elementType);
      typewriterDiv.appendChild(h1);
      container.appendChild(typewriterDiv);
      document.body.appendChild(container);
  
      let stringIndex = 0; 
      let charIndex = 0;
      let currentText = '';
      let typingTimeout, backspacingTimeout;
  
      const typeText = () => {
        if (charIndex < this.strings[stringIndex].length) {
          currentText += this.strings[stringIndex][charIndex];
          h1.innerHTML = currentText;
          charIndex++;
          typingTimeout = setTimeout(typeText, this.typeSpeed);
        } else {
          setTimeout(startBackspace, this.backDelay); 
        }
      };
  
      const startBackspace = () => {
        let backspaceIndex = currentText.length;
        const backspaceText = () => {
          if (backspaceIndex > 0) {
            currentText = currentText.slice(0, backspaceIndex - 1);
            h1.innerHTML = currentText;
            backspaceIndex--;
            backspacingTimeout = setTimeout(backspaceText, this.backSpeed);
          } else {
            stringIndex = (stringIndex + 1) % this.strings.length; 
            charIndex = 0;
            if (this.onAnimationEnd) {
                this.onAnimationEnd(); 
            }
          }
        };
        backspaceText();
      };
  
      typeText();
  
      return container;
    }
  }
  