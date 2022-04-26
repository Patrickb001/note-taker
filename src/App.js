import { useState, useEffect } from "react";
import { v4 as uuidV4 } from "uuid";

import Header from "./components/Header/Header";
import NoteInput from "./components/TextareaNote/NoteInput";
import NoteContainer from "./components/Notes/NoteContainer";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  const handleInputSubmit = (event) => {
    event.preventDefault();
    const input = event.target[0].value;
    event.target[0].value = "";
    let note = {
      id: uuidV4(),
      description: input,
    };
    setNotes((prevState) => [note, ...prevState]);
  };

  return (
    <div className="w-50 m-auto">
      <Header />
      <NoteInput onInputSubmit={handleInputSubmit} />
      <NoteContainer notes={notes} />
    </div>
  );
}

export default App;
