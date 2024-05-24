import React from "react";
import { Fade } from "react-awesome-reveal";

class Typo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [
        "React Front End Developer",
        "Electronic & Computer Engineer",
        "Asp.NET core Backend Developer",
      ],
      currentText: 0,
      currentTextIndex: 0,
    };
    this.typingEffect = this.typingEffect.bind(this);
  }

  componentDidMount() {
    //On Load Run typing Effect
    setTimeout(() => {
      this.typingEffect();
    }, 2700);
  }

  render() {
    return (
      <Fade bottom big delay={1000} triggerOnce>
        <div className="h5Hold">
          <p id="text" className="blinkAnime" />
        </div>
      </Fade>
    );
  }

  // Implements typing effect
  typingEffect() {
    const Elem = document?.querySelector("#text");
    setTimeout(() => {
      Elem?.classList.toggle("blinkAnime");
    }, 2100);
    var position = 0;
    var currentString;
    var q = 0;
    var intervalValue;
    //TYPING LOOP
    const Type = () => {
      intervalValue = setInterval(() => {
        currentString = this.state.content[position];
        var text = currentString?.substring(0, q + 1);
        Elem.innerHTML = text;
        q++;
        //ADDS TEXT TILLS Q REACHES MAX
        if (text === currentString) {
          Elem.classList.toggle("blinkAnime");
          clearInterval(intervalValue);
          setTimeout(() => {
            Elem.classList.toggle("blinkAnime");
            //PERFORM DELETE FUNCTION HERE
            Delete();
          }, 2500);
        }
      }, 200);
    };
    //TRTY DEFINE DELETE ND CALLING IT INSTEAD
    const Delete = () => {
      const deleteIntervalValue = setInterval(() => {
        var text2 = currentString.substring(0, q - 1);
        Elem.innerHTML = text2;
        q--;
        if (Elem.innerHTML === "" || text2 === "") {
          clearInterval(deleteIntervalValue);
          q = 0;
          if (position === this.state.content.length - 1) {
            // If last sentence then display the first one, else move to the next
            position = 0;
            setTimeout(Type, 300);
          } else {
            // Start to display the next sentence after some time
            position++;
            setTimeout(Type, 300);
          }
        }
      }, 100);
    };
    if (position === 0 && Elem !== null) {
      Type();
    }
  }
}

export default Typo;
