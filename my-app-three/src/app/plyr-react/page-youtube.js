"use client";
import React, { useRef } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const videoSrc = {
  type: "video",
  sources: [
    {
      src: "yWtFb9LJs3o",
      provider: "youtube",
    },
   
  ],
};

export default function PlyrReact() {
  const playerRef = useRef(null);

  const options = {
    controls: [
      "rewind",       // ⏪ Backward button (the one in your screenshot)
      "play-large",
      "play",
    //   "fast-forward", // ⏩ Forward button
      "progress",
      "current-time",
      "mute",
      "volume",
      "settings",
      "fullscreen",
    ],
    seekTime: 10, // how many seconds to skip when rewind/forward is clicked
    invertTime: false, // Display time in normal order (not inverted)
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
