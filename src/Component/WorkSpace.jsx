/* eslint-disable react/prop-types */

import TopBar from "./TopBar"

export default function WorkSpace({children}){
    return(
        <div className="flex flex-col place-items-center w-full border-opacity-50 h-screen">
        <div className="grid h-30   m-1">
          <TopBar/>
        </div>
        <div className="grid h-70 place-items-center  border">
         {children}
        </div>
      </div>
   
    )
}
