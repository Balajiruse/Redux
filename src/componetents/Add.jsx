/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

const AddTask = ({ taskdata, settaskdata }) => {
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');

    const addnewtask = () => {
        const newTask = {
            title,
            description,
            status: "Not completed"
        };
        settaskdata([...taskdata, newTask]);
    };

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 m-5">
            <input
                type="text"
                placeholder="Enter Task Name"
                className="input input-bordered w-80"
                value={title}
                onChange={(e) => settitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter Description"
                className="input input-bordered w-80"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
            />
            <button
                className="btn btn-accent w-24"
                onClick={addnewtask}>
                Add
            </button>
        </div>
    );
};

export default AddTask;
