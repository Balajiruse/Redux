/* eslint-disable react/prop-types */
import Topbar from "./topbar";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updatecart } from "../Redux/redux";

export default function Cart({id}){

  const {info,cart}=useSelector((state)=>state.Dataupdater.data)
    const selectedproduct=info?.filter((data)=>data.id==id.id)
    const navigate=useNavigate();
    const dispatch=useDispatch();
       
    const handleQuantityChange =(event) => {
        const quantity = parseInt(event.target.value, 10);
        if (!isNaN(quantity) && quantity > 0) {
          dispatch(updatecart(quantity));
        } else {
          dispatch(updatecart(1));
        }
      };
    return(
        <div className="flex flex-col w-full">
        <div className="grid h-20 card rounded-box place-items-center m-1">
            <Topbar/>
        </div>
        <div className="flex flex-nowrap rounded-box justify-center items-center">
            <div className="grid m-1">
                {selectedproduct&&selectedproduct?.map((data,id)=>
                <div className="card lg:card-side bg-base-100 shadow-xl" key={id}>
                  <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                    <div className="carousel-item">
                      <img src={data.images[0]} className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                      <img src={data.images[1]} className="rounded-box" />
                    </div> 
                    <div className="carousel-item">
                      <img src={data.images[2]} className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                      <img src={data.images[3]} className="rounded-box" />
                    </div> 
                    <div className="carousel-item">
                      <img src={data.images[4]} className="rounded-box" />
                    </div>
                  </div>
                <div className="card-body">
                       <h1 className="card-title">Model Name: {data.title} </h1>
                            <h2 className="card-title">Brand:{data.brand} <div className="badge badge-accent badge-outline">Rating: {data.rating}/5</div> </h2>
                            <div className="stats shadow">
                            <div className="stat">
                                <div className="stat-title">OfferPrice:</div>
                                <div className="stat-value"> ₹ {data.price*90}</div>
                                <div className="stat-desc">discount:{data.discountPercentage}% </div>
                            </div>
                            
                            </div>
                            <kbd className="balck w-64"><h2>Mrp: ₹ {((data.price / (1 - data.discountPercentage / 100))*90).toFixed(2)}</h2></kbd>
                            <p>{data.description}</p> 
                            
                         <div className="card-actions justify-center">    
                         <span>Quantity:</span>   
                            <select
                            className="select select-bordered select-sm w-24 max-w-xs"
                            onChange={handleQuantityChange}
                            value={cart}
                            >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            </select>
                         </div>
                         <div className="stat">
                                <div className="stat-title">Total price:</div>
                                <div className="stat-value"> ₹ {cart*data.price*90}</div>
                            </div>
                         <div className="card-actions justify-center">
                         <button className="btn btn-primary" onClick={()=>navigate(`/`)}>Order Now</button>
                         </div>
                        </div>
              </div>
                )
                }
            </div>
        </div>

       </div>
    )
}
