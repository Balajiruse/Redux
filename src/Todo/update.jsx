/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const UpdateTask = ({ taskdata, settaskdata, show, setshow, editid }) => {
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [status,setstatus]=useState('')

    
    useEffect(()=>{
        const selectedtask =taskdata.filter((info,idx)=>idx===editid)
        settitle(selectedtask[0].title);
        setdescription(selectedtask[0].description);
        setstatus(selectedtask[0].status)

        console.log(selectedtask[0])
    },[editid]);

    
    const update = () => {
        const updated = {
            title,
            description,
            status
        };
        taskdata[editid]=updated
        settaskdata([...taskdata]);
        setshow(true)
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
                onClick={update}>
                update
            </button>   
        </div>
    );
};

export default UpdateTask;
