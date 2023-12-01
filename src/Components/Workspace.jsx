/* eslint-disable react/prop-types */

import Carousel from "./Carousel";
import Topbar from "./topbar";



export default function Workspace ({children}){
    return (
       <div className="flex flex-col w-full">
        <div className="grid h-20 card rounded-box place-items-center m-1">
            <Topbar/>
        </div>
       
         <Carousel/>
        


        <div className="flex flex-nowrap rounded-box place-items-center">
            <div className="grid m-1">
                {children}
            </div>
        </div>

       </div>
      );
}
