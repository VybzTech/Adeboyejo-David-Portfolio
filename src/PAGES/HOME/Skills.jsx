import SkillSvg from "./SkillSvg";
import Tools from "./Tools";
import KeySkills from "./KeySkills";
import React, { useState } from "react";
import { Params } from "../Utils";
import Particles from "react-tsparticles";
import { Fade, Slide } from "react-awesome-reveal";
import ReactVisibilitySensor from "react-visibility-sensor";

const Skills = () => {
  const [anime, setAnime] = useState(false);

  //OLD VIEW PORT CODE

  // useEffect(() => {
  // 	const onIntersection = (entries) => {
  // 		entries.forEach(() => {
  // 			setAnime(true);
  // 		});
  // 	};
  // 	var observer = new IntersectionObserver(
  // 		onIntersection,
  // 		{
  // 			root: null,
  // 			threshold: 0.5,
  // 		}
  // 	);

  // 	observer.observe(
  // 		document?.querySelector(".KeySkillsWrapper")
  // 	);
  // }, []);

  return (
    <ReactVisibilitySensor
      resizeCheck={true}
      delayedCall={true}
      scrollCheck={true}
      scrollDelay={150}
      partialVisibility={true}
      active={!anime}
      minTopValue={200}
      onChange={(isVisible) => setAnime(isVisible)}
    >
      <div className="skills">
        <Particles params={Params} />
        <div className="KeySkillsWrapper">
          <Fade left className="keySkills">
            <KeySkills />
          </Fade>
          <figure>
            <Slide triggerOnce right className="skillPoster">
              <SkillSvg />
            </Slide>
            <Slide triggerOnce right>
              <Tools />
            </Slide>
          </figure>
        </div>
      </div>
    </ReactVisibilitySensor>
  );
};

export default Skills;
