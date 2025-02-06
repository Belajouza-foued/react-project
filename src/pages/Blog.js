import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../pages/styles/Blog.css'
import { Link } from "react-router-dom";
import BlogImage from "../pages/images/image_1.jpg"

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Les bienfaits du fitness quotidien",
      date: "2025-03-01",
      excerpt: "Découvrez comment le fitness quotidien peut transformer votre vie, améliorer votre santé et booster votre énergie.",
      image: BlogImage // Assure-toi que le chemin correspond à ton projet
    },
    {
      id: 2,
      title: "Nutrition et entraînement: le duo gagnant",
      date: "2025-03-10",
      excerpt: "Apprenez à combiner une alimentation équilibrée avec des séances d’entraînement efficaces pour obtenir des résultats optimaux.",
      image: "assets/images/blog2.jpg"
    },
    {
      id: 3,
      title: "Conseils pour rester motivé en salle de sport",
      date: "2025-03-20",
      excerpt: "Restez motivé et persévérant grâce à ces astuces simples et efficaces qui feront de votre séance de sport un moment agréable.",
      image: "assets/images/blog3.jpg"
    }
  ];
  return (
    <div className="blog-container">
    <h1 className="blog-title">WorldFitness Blog</h1>
    <div className="blog-posts">
      {blogPosts.map(post => (
        <div key={post.id} className="blog-post">
          <img src={post.image} alt={post.title} className="blog-post-image" />
          <div className="blog-post-content">
            <h2 className="blog-post-title">{post.title}</h2>
            <p className="blog-post-date">{post.date}</p>
            <p className="blog-post-excerpt">{post.excerpt}</p>
            <Link to={`/help/${post.id}`} className="blog-read-more">Lire la suite</Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Blog;
