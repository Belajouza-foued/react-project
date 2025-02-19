import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../pages/styles/Blog.css'
import { useEffect, useState } from "react";


const Blog = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 10;
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    
  <>
  <div className="container">
   <div className="blog-container">
  <div className="container p-5 my-5 bg-primary text-white" style={{borderRadius:"10px"}}>
  <h1 className="text-white">Our blogs</h1>
  <p className="d-flex text-align-center  justify-content-center">This container has a blue background color and a white text, and some extra padding and margins.</p>
</div>  
  </div>
  <div>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <p>{progress}%</p>
    </div>
  </div>
  </>
  );
 
}
export default Blog;
