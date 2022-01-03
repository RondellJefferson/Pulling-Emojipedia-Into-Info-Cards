import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";

function createCard(emojipedias) {
  return (
    <Emoji
      key={emojipedias.key}
      emoji={emojipedias.emoji}
      name={emojipedias.name}
      meaning={emojipedias.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div className="flex">{emojipedia.map(createCard)}</div>
    </div>
  );
}

export default App;
