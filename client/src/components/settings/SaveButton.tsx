interface Props {
  onSave: () => void;
}

const SaveButton = ({ onSave }: Props) => {
  return (
    <button
      className="save-btn"
      onClick={onSave}
    >
      Save Changes
    </button>
  );
};

export default SaveButton;