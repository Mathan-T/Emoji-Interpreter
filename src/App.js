import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🐕": "Dog",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐈": "Cat",
  "🦁": "Lion",
  "🐯": "Tiger",
  "🐆": "Leopard",
  "🐎": "Horse",
  "🦌": "Deer",
  "🐮": "Cow",
  "🐷": "Pig",
  "🐐": "Goat",
  "🐪": "Camel",
  "🐘": "Elephant",
  "🦏": "Rhinoceros",
  "🐭": "Mouse",
  "🐰": "Rabbit"
};

var emojisWeHave = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We dont have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        onChange={emojiChangeHandler}
        style={{ width: "80%" }}
        placeholder="Type/click the emoji to know the meaning of it..."
      ></input>
      <h2>{meaning}</h2>
      <h3 style={{ color: "gold" }}>Emojis in our database</h3>
      {emojisWeHave.map(function (emoji) {
        return (
          <span
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "xx-large", padding: "1rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
