import Note from "./Note";

const NoteContainer = ({ notes }) => {
  return (
    <div className="note-container mt-5 text-left">
      {notes.map((note) => (
        <Note id={note.id} description={note.description} />
      ))}
    </div>
  );
};

export default NoteContainer;
