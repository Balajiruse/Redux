/* eslint-disable no-undef */
import { useNavigate } from "react-router-dom";
export default function TopBar() {
 const navigate=useNavigate();
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1 navbar-start">
      <div role="tablist" className="tabs tabs-bordered">
  <a  role="tab" className="tab tab-bordered hover text-black-900 font-semibold"  
   onClick={()=>navigate("/")}>ALL
    </a> 
  <a role="tab"className="tab tab-bordered hover text-black-900 font-semibold"
  onClick={()=>navigate("/doc/FullStack")}>FULL STACK DEVELOPMENT
    </a> 
  <a role="tab" className="tab tab-bordered  hover text-black-900 font-semibold"
   onClick={()=>navigate("/doc/Science")}> DATA SCIENCE</a>
  
  <a role="tab"className="tab tab-bordered  hover text-black-900 font-semibold"
      onClick={()=>navigate("/doc/Security")}>CYBER SECURITY
  </a>
  <a role="tab" className="tab tab-bordered hover text-black-900 font-semibold"
      onClick={()=>navigate("/doc/Career")}>CAREER
  </a>
  </div>
   </div>
   </div>
  
 

    
  );
}
