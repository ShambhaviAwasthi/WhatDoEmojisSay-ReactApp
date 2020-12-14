import React from "react";
import Entry from "/src/components/Entry";
import emojipedia from "../emojipedia";

function singleEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}
function App(props) {
  return (
    <div>
      <h1>
        <span>What do Emojis Say</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(singleEntry)}</dl>
    </div>
  );
}

export default App;
