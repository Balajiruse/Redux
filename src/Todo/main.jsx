/* eslint-disable no-unused-vars */
import { useState } from 'react';
import AddTask from './add';
import UpdateTask from './update';
import Mytodo from './todo';
import Filter from './filter';

export default function Main() {
    const data = [
        {
            title: "Office Task 1",
            description: "This is about 1st Task",
            status: "Completed"
        },
        {
            title: "Office Task 2",
            description: "This is about 2nd Task",
            status: "Not Completed"
        },
        {
            title: "Office Task 3",
            description: "This is about 3rd Task",
            status: "Completed"
        },
        {
            title: "Office Task 4",
            description: "This is about 4th Task",
            status: "Not Completed"
        }
    ];
    const [taskdata,settaskdata]=useState(data);
    const [show,setshow]=useState(true);
    const [editid,seteditid]=useState("")

    const handleDelete = (index) => {
        const rest=taskdata.filter((info,id)=>id!==index)
        console.log(rest)
        settaskdata(rest)
    };
    const editbtn = (id) => {
        setshow(false);
        seteditid(id); 
        console.log(id)
    };
    

    return (
        
        <div className="  main mx-5 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-48 flex flex-col items-center">
            {show===true?(<AddTask taskdata={taskdata} settaskdata={settaskdata}/>):
            (<UpdateTask  taskdata={taskdata} settaskdata={settaskdata} show={show} setshow={setshow} editid={editid}/>)}
                
                <Filter initialTaskdata={data} taskdata={taskdata} settaskdata={settaskdata} />

          <Mytodo taskdata={taskdata} settaskdata={settaskdata}  setshow={setshow}  seteditid={seteditid}/>
           
        </div>
    );
}
