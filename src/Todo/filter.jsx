/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function Filter({ initialTaskdata, taskdata, settaskdata }) {
    const handleFilterChange = (selectedValue) => {
      if (selectedValue === 'All') {
        settaskdata(initialTaskdata);
      } else {
        const filteredData = taskdata.filter((info) => info.status === selectedValue);
        settaskdata(filteredData);
      }
    };
  
    return (
      <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">My Todo</a>
      </div>
      <div className="flex-none">
      <span>Status Filter:</span>
            <select
              className="select w-full max-w-xs sm:max-w-md"
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Not Completed">Not Completed</option>
            </select>
      </div>
    </div>
  
    );
  }

