/* eslint-disable react/prop-types */
export default function Mytodo({ taskdata, settaskdata, setshow, seteditid }) {
    const handleDelete = (index) => {
      const rest = taskdata.filter((info, id) => id !== index);
      settaskdata(rest);
    };
  
    const editbtn = (id) => {
      setshow(false);
      seteditid(id);
    };
  
    const handleStatusChange = (index, selectedStatus) => {
      const updatedData = [...taskdata];
      updatedData[index].status = selectedStatus;
      settaskdata(updatedData);
    };
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {taskdata &&
          taskdata.map((info, idx) => (
            <div
              className={`card w-96 bg-base-100 bg-black text-neutral-content shadow-xl gap-5 p-5 m-5 b`}
              key={idx}
            >
              <div className="card-body">
                <h2 className="card-title">Name: {info.title}</h2>
                <p>Description: {info.description}</p>
                <div className="flex items-center space-x-2">
                  <p>Status:</p>
                  <select
                    className="select select-accent w-full max-w-xs"
                    style={{
                        backgroundColor: info.status === 'Completed' ? 'green' : 'red',
                      }}
                    value={info.status}
                    onChange={(e) => handleStatusChange(idx, e.target.value)}
                  >
                    <option value="Completed">Completed</option>
                    <option value="Not Completed">Not Completed</option>
                  </select>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-info" onClick={() => editbtn(idx)}>
                    Edit
                  </button>
                  <button className="btn btn-error" onClick={() => handleDelete(idx)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
  
