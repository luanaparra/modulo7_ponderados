import { useState, useCallback, useContext } from "react";
import { FiEdit, MdOutlineDeleteOutline } from "react-icons/all";
import { AuthContext } from "../context/AuthContext";

function EditableTask({ task, onUpdate, onDelete }) {
  const { authState } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [isChecked, setIsChecked] = useState(task.completed);

  const handleInputChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleSaveClick = () => {
    if (editedText !== task.text) {
      onUpdate(task.id, editedText, isChecked);
    }
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const updateStatus = (checked) => {
    setIsChecked(checked);
    onUpdate(task.id, editedText, checked);
  };

  const IconWrapper = ({ onClick, icon: Icon }) => (
    <button onClick={onClick}>
      <Icon />
    </button>
  );

  return (
    <div className="text-gray-500 text-lg flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={task.id}
          name={task.id}
          checked={isChecked}
          onChange={(e) => updateStatus(e.target.checked)}
        />
        {isEditing ? (
          <input type="text" value={editedText} onChange={handleInputChange} />
        ) : (
          <label htmlFor={task.id}>{editedText}</label>
        )}
      </div>
      <div>
        {isEditing ? (
          <IconWrapper onClick={handleSaveClick} icon={LiaSave} />
        ) : (
          <>
            <IconWrapper onClick={handleEditClick} icon={FiEdit} />
            <IconWrapper onClick={handleDeleteClick} icon={MdOutlineDeleteOutline} />
          </>
        )}
      </div>
    </div>
  );
}

export default EditableTask;
