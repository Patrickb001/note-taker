const NoteInput = ({ onInputSubmit }) => {
  return (
    <form onSubmit={onInputSubmit} className="form-floating">
      <textarea
        style={{ height: "100px" }}
        className="form-control"
        id="floatingTextarea"
      ></textarea>
      <label htmlFor="floatingTextarea">Note:</label>
      <button type="submit" className=" btn bg-success text-white mt-3">
        Add Note
      </button>
    </form>
  );
};

export default NoteInput;
