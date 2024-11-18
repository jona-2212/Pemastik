import React from 'react';
import './HalamanTopic.css';
import Navbar from "../components/Navbar"; 
import Footer from '../components/Footer';

const HalamanTopic = () => {
  return (
    <>
      {/* Navbar di luar container */}
      <Navbar />

      <div className="container1 fade-in">
        <header className="header">
          <h1>
            <span className="highlight3">T</span>
            <span className="title3">OPICS for</span>
            <span className="highlight3">Y</span>
            <span className="title3">OU</span>
          </h1>
          <p className="description">
            Explore trending topics driven by AI insights from social media.
            Discover what matters now and create content that truly engages.
            Stay inspired and one step ahead.
          </p>
        </header>

        {/* Topics Section */}
        <section className="topics fade-in">
          <div className="topic">
            <span className="topic-number">01.</span>
            <img src="contain_gambar.png" alt="Topic 1" />
            <h2>
              The Rise of AI Art: How Creativity <br />
              and Technology Are Merging
            </h2>
          </div>
          <div className="topic">
            <span className="topic-number">02.</span>
            <img src="contain_gambar1.png" alt="Topic 2" />
            <h2>
              Why Minimalism and Subtle Elegance <br />
              Are Taking Over Social Feeds
            </h2>
          </div>
          <div className="topic">
            <span className="topic-number">03.</span>
            <img src="contain_gambar2.png" alt="Topic 3" />
            <h2>Microinfluencers Are the New Celebrities</h2>
          </div>
          <div className="topic">
            <span className="topic-number">04.</span>
            <img src="contain_gambar4.png" alt="Topic 4" />
            <h2>The Secret Behind High-Performing Content</h2>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="statistics fade-in">
          <img src="grafik.png" alt="Statistics Graph 1" />
          <img src="grafik1.png" alt="Statistics Graph 2" />
        </section>

        {/* Footer Section */}
        <section className="footer fade-in">
          <h2>
            <span className="highlight">O</span>
            <span className="title">THER </span>
            <span className="highlight">T</span>
            <span className="title">OPICS</span>
          </h2>
          <div className="footer-topics">
            <div className="footer-topic">
              <img src="topic1.png" alt="Other Topic 1" />
              <h3>The Rise of AI Art: Creativity and Technology</h3>
            </div>
            <div className="footer-topic">
              <img src="topic2.png" alt="Other Topic 2" />
              <h3>Minimalism and Elegance in Social Feeds</h3>
            </div>
            <div className="footer-topic">
              <img src="topic3.png" alt="Other Topic 3" />
              <h3>Microinfluencers: The New Celebrities</h3>
            </div>
          </div>
        </section>
      </div>

      {/* Footer di luar container */}
      <Footer />
    </>
  );
};

export default HalamanTopic;
