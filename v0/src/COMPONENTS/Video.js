import React, { useState, useEffect, useRef } from "react";

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};

const Video = ({ vid, img, imgName }) => {
  const videoRef = useRef();
  const [useImg, setUseImg] = useState(false);
  useEffect(() => {
    if (isSafari() && videoRef.current) {
      const player = videoRef.current.children[0];
      if (player) {
        player.controls = false;
        player.playysinline = true;
        player.muted = true;
        player.setAttribute("muted", "");
        player.autoplay = true;

        setTimeout(() => {
          const promise = player.play();
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                videoRef.current.style.display = "none";
                setUseImg(true);
              });
          }
        }, 50);
      }
    }
  }, []);
  return useImg ? (
    <img src={img} alt={imgName} />
  ) : (
    <div
      className="vid"
      dangerouslySetInnerHTML={{
        __html: `
						<video 
							data-home-video
							loop
							autoPlay
							muted
							playsInline
						>
							<source
                            src=${vid}
                            type="video/mp4"
							/>
                            <img
                            src=${img}
                            alt=${imgName}
                        />
						</video>`,
      }}
    />
  );
};

export default Video;

/* 

import React from "react";

const Video = ({ img, imgName }) => {
	return (
		<img src={img} alt={imgName} />
	);
};

export default Video;

// */
