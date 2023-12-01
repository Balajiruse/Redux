import MainBar from "../Component/MainBar";

const SciencePage= ()=>{
/* eslint-disable react/prop-types */


    const data = [{
        name: "Top Product-Based Companies for Data Science Freshers",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
        
      },
      {
        name: "What is the Difference between Data Science and Data Engineering?",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
       
      },
       {
        name: "Top Product-Based Companies for Data Scientists in 2023",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
        
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
   export default SciencePage;
