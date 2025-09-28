"use client";
import React, { useRef } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
// import video from "../../public/YTDown.com_YouTube_Media_VHz3srJjAV4_001_1080p.mp4"; // Uncomment and use if you want to use a local video file

const videoSrc = {
  type: "video",
  sources: [
    {
      // src: "https://www.youtube.com/watch?v=HUdfZYZFiF8", // replace with your .mp4 link
      // type: "video/mp4",
      src: "/YTDown.com_YouTube_Media_VHz3srJjAV4_001_1080p.mp4", // use your local video file from public folder
      type: "video/mp4",
    },
    {
      src: "https://cdn.plyr.io/static/blank.webm", // optional: alternative format
      type: "video/webm",
    },
  ],
  poster: "https://plus.unsplash.com/premium_photo-1666672388644-2d99f3feb9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww", // optional thumbnail
  
};

export default function PlyrReact() {
  const playerRef = useRef(null);

  const options = {
    controls: [
      "rewind", // ⏪ back 10s
      "play-large",
      "play",
      "progress",
      "current-time",
      "duration",
      "mute",
      "volume",
      "settings",
      "fullscreen",
    ],
    seekTime: 10, // how many seconds to skip
    invertTime: false, // show remaining time normally
   
    listeners: {
        seek: event => {
            const seekTime = event.detail.plyr.currentTime;
            if (seekTime > player.currentTime) {
                player.currentTime = seekTime; // Prevent seeking forward
            }
        }
    }
  };

  return (
    <>
      <h1>Plyr React</h1>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <Plyr ref={playerRef} source={videoSrc} options={options} />
      </div>
    </>
  );
}
