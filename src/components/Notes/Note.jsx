import ModalButton from "../Modal/Modal";

const Note = ({ id, description }) => {
  return (
    <div className="note-card" key={id}>
      <p>
        {description.length > 50
          ? description.slice(0, 29) + " ..."
          : description}
      </p>
      <ModalButton description={description} />
    </div>
  );
};

export default Note;
