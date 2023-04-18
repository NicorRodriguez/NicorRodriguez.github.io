import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="hero">
      <img className="hero-img" src="/images/hero.jpg" alt="Hero" />
      <div className="hero-content">
        <div className="floating-window">
          <div className="content">
            <h1 className="hero-title">Nicolas Rodriguez</h1>
            <p className="hero-text">I'm a DevOps passionate about creating functional, high available and reliable web experiences.</p>
            <p className="hero-text-smaller">
              As a DevOps professional, I have extensive experience in managing and implementing GitLab, CI/CD pipelines, AWS services, and Kubernetes, among other cutting-edge technologies. With a
              strong background in software development and operations, I am committed to streamlining development processes and improving deployment efficiency, while maintaining a focus on
              scalability, security, and reliability. My expertise in these areas has enabled me to successfully design, implement, and manage complex software systems for various organizations.
            </p>
            <a href="about" className="btn btn-primary">
              About me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
