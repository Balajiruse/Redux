import MainBar from "../Component/MainBar";

/* eslint-disable react/prop-types */
const AllPage = ()=>
{

  const data = [{
      name: "Best 19 Product-Based Companies for Civil Engineers in India",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Civil-Engineers-in-India.webp",
      
    },
    {
      name: "7 Best High-Paying IT Jobs For Arts Students",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Best-High-Paying-IT-Jobs-For-Arts-Students.webp",
     
    },
     {
      name: "Top Ways to Assess Soft Skills in Full Stack Developers in 2023",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      
    }];
    
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
  export default AllPage;
  
    
 
  