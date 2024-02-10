import React, { useState } from 'react'
import { updateCar } from '../lib/controler';
import { useNavigate } from 'react-router-dom';


interface IProps {
    editDesc: boolean;
    setEditDesc: React.Dispatch<React.SetStateAction<boolean>>;
    id?: string;
    editPower: boolean;
    setEditPower: React.Dispatch<React.SetStateAction<boolean>>;
}

function EditDesc({editDesc, setEditDesc, id}: IProps) {
        const [newDesc, setNewDesc] = useState("")

        const navigate = useNavigate();

        const handleUpdate = () => {
            //update car
            updateCar(id, {desc: newDesc});
            setEditDesc(!editDesc);
            //navigate back to homepage
            navigate("/")
        }

  return <div className="edit">
    <label>Please enter the new car description below:</label>
        <textarea 
		required name="desc" 
		id="desc"
        value={newDesc}
        onChange={(e) => setNewDesc(e.target.value)}
        />
        <button className="update-button" onClick={() => handleUpdate()}>
		Update Car
		</button>
        </div>;
}

function EditPower({editPower, setEditPower, id}: IProps) {
    const [newPower, setNewPower] = useState("")

    const navigate = useNavigate();

    const handleUpdate = () => {
        //update car
        updateCar(id, {desc: newPower});
        setEditPower(!editPower);
        //navigate back to homepage
        navigate("/")
    }

return <div className="edit">
<label>Please enter the new car description below:</label>
    <textarea 
    required name="power" 
    id="power"
    value={newPower}
    onChange={(e) => setNewPower(e.target.value)}
    />
    <button className="update-button" onClick={() => handleUpdate()}>
    Update Car
    </button>
    </div>;
}

export default EditDesc 