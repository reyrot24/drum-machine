import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [activeKey, setActiveKey] = useState("");
  const [sound, setSound] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playSound(event.key.toUpperCase());
    });
  });

  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      sound: "Heater 1",
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      sound: "Heater 2",
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      sound: "Heater 3",
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      sound: "Heater 4",
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      sound: "Heater 6",
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      sound: "Open Hi-hat",
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      sound: "Kick and hi-hat",
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      sound: "Kick",
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      sound: "Hi-Hat",
    },
  ];

  function playSound(selector, sound) {
    const audio = document.getElementById(selector);
    audio.play();
    setActiveKey(selector);
    setSound(sound);
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div className="drum-pads">
          {drumPads.map((drumPads) => (
            <div
              key={drumPads.src}
              onClick={() => {
                playSound(drumPads.text, drumPads.sound);
              }}
              className="drum-pad"
              id={drumPads.src}
            >
              {drumPads.text}
              <audio
                src={drumPads.src}
                className="clip"
                id={drumPads.text}
              ></audio>
            </div>
          ))}
        </div>

        <div id="display">
          {activeKey}-{sound}
        </div>
      </div>
    </div>
  );
}

export default App;
