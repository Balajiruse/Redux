/* eslint-disable react/prop-types */
export default function WorkSpace({ children }) {
    return (
      <div className="flex flex-col w-full border-opacity-50 h-screen">
        <div className="grid h-20 card rounded-box place-items-center m-1">
          <h1 className="text-5xl font-bolder midnight"> MY Todo</h1>
        </div>
  
        <div className="flex flex-nowrap rounded-box place-items-center h-screen">
          <div className="grid h-full m-1">{children}</div>
        </div>
      </div>
    );
  }