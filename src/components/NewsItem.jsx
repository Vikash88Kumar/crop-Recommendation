
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { article } from 'framer-motion/client';

function NewsItem({ article }) {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
  };



  return (
    // <div className="card my-3">
    //   <img src={article.urlToImage} className="card-img-top" alt={article.title} />
    //   <div className="card-body">
    //     <h5 className="card-title">{article.title}</h5>
    //     <p className="card-text">{article.description}</p>
    //    
    // </div>
     <div style={{ maxWidth: 900, margin: "auto", padding: "20px 0" }}>
         <h3 style={{ marginBottom: 20, fontWeight: "bold" }}>Recent Articles</h3>
         <Slider {...sliderSettings}>
          
            <div key={article.urlToImage} style={{ padding: 10 }}>
              <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.12)", cursor: "pointer", backgroundColor: "white" }}>
                <img src={article.urlToImage} alt={article.title} style={{ width: "100%", height: 200, objectFit: "cover" }} />
                <div style={{ padding: 15 }}>
                  <span style={{ display: "inline-block", padding: "4px 8px", backgroundColor: "#f7d6d0", color: "#d2691e", fontSize: 12, fontWeight: "bold", borderRadius: 4, marginBottom: 10 }}>
                    {article.title}
                  </span>
                  <p style={{ margin: 0, fontWeight: "bold", fontSize: 16 }}>{article.description}</p>
                   <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
         
        </Slider>
      </div>
  );
}

export default NewsItem;
