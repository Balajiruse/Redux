import MainBar from "../Component/MainBar"

const CareerPage= ()=>{

 /* eslint-disable react/prop-types */



    const data = [{
        name: "Best 11 Product-Based Companies for Product Managers in India ",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp",
        
      },
      {
        name: "Top 13 Product Based Companies for AI Freshers",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-product-based-companies-for-ai-freshers.webp",
       
      },
       {
        name: "Top 8 Product-based Companies for UI/UX Designers [Freshers]",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-based-Companies-for-UIUX-Designers.webp",
        
      }]
      
      return (
        <div className="app">
          {
          data.map((card,idx)=>(
            <MainBar key={idx}
            img={card.img} 
            name={card.name}
            />
          ))
        }
        </div>
      )
    }
    
    export default CareerPage;
    
