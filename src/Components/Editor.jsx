import React from "react";
import './Editor.css';

const Editor = () => {
  function makeBold() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const bold = document.createElement("b");
    bold.appendChild(range.extractContents());
    range.insertNode(bold);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  function makeItalic() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const bold = document.createElement("em");
    bold.appendChild(range.extractContents());
    range.insertNode(bold);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  function submitMethod( ){
    const text = document.getElementsByClassName("text-area").innerHTML;

    const data = { text: text };

fetch("localhost:3000/create", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

  }

  return (
    <div className="container">
      <button onClick={makeBold}>Bold</button>
      <button onClick={makeItalic}>Italic</button>
      <div className="text-area" contentEditable="true">
        This is some editable text.
      </div>
      <button onClick={submitMethod}>Submit</button>
    </div>
  );
};

export default Editor;
