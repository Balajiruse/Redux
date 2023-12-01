/* eslint-disable react/prop-types */
export default function MainBar({img,name}) {
  
    return (
    
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
            <div className="img">
            <figure><img src={img} /></figure>
            </div>
            <div className="card-actions card-title">
             <h1>{name}</h1> 
             
            </div>
          </div>
           </div>
        )}
     
    