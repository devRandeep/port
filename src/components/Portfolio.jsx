import React, { useContext } from "react";
import portfolioimg from '../assets/project2.jpg'
import { useMyContext } from "../hooks/context";
import Design from "./Design";


const Portfolio = () => {
  const {portfoliodata}=useMyContext()
  console.log(portfoliodata,"portfoliodata");
  
  return (
  <>
    <section className="portfolio_wrap p50">
      <div className="portfolio">
        <h1 className="text-center h2">My Portfolio Frontend Projects</h1>
        <p className="text-center py-3">These are my frontend live projects </p>
        <div className="container">
          <div className="row">
         {
          portfoliodata.map((value,index)=>(
            <div className="col-lg-4">
            <div className="gallery">
              {/* <img src={value?.img} alt="img"  /> */}
              <iframe src={value.url} height="100%" width="100%" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"
              className="portimg"></iframe>
             <div className="gallery_txt">
             <p className="h4" style={{color:"#fff",fontFamily:"Prata", marginBottom:"10px"}}>{value?.name}</p>           
             <p style={{color:"#71abff"}}><b style={{color:"#fff", fontWeight:"400"}}>Website URL : </b>{value?.projectUrladdress}</p>
              <p><b style={{color:"#fff", fontWeight:"400"}}>Project Desc :</b> {value?.projectDesc}</p>
             {/* <p>{value?.category}</p> */}
             </div>
            </div>
          </div>
          ))
         }
          </div>
        </div>
      </div>
    </section>
    <Design/>
    </>
  );
};

export default Portfolio;
