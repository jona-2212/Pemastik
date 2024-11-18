import React from 'react';
import './HalamanFind.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; // Tambahkan import ini

const SocialTrending = () => {
  const profiles = [
    { id: 1, name: 'Sarah Seh', username: '@sarahhhhh', followers: '20M Followers', description: 'Lorem ipsum dolor sit amet consectetur. Mattis in quis dignissim in.', image: '1.png' },
    { id: 2, name: 'Alexander', username: '@alek', followers: '20M Followers', description: 'Lorem ipsum dolor sit amet consectetur. Mattis in quis dignissim in.', image: '2.png' },
    { id: 3, name: 'Jennifer', username: '@jen123', followers: '20M Followers', description: 'Lorem ipsum dolor sit amet consectetur. Mattis in quis dignissim in.', image: '3.png' },
    { id: 4, name: 'Niki', username: '@niki_', followers: '20M Followers', description: 'Lorem ipsum dolor sit amet consectetur. Mattis in quis dignissim in.', image: '4.png' },
  ];

  return (
    <div className="social-trending">
      <div className="profile-container">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <img src={profile.image} alt={profile.name} className="profile-image" />
            <h3 className="profile-name">{profile.name}</h3>
            <p className="profile-username">{profile.username}</p>
            <p className="profile-followers">{profile.followers}</p>
            <p className="profile-description">{profile.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const HalamanFind = () => {
  const handleFileUpload = (event) => {
    console.log('File uploaded:', event.target.files[0]);
  };

  return (
    <>
      <Navbar />
      <div className="container9 fade-in">
        <header className="header">
          <h2>
            <span className="highlight2">F</span>
            <span className="title2">EEL and </span>
            <span className="highlight2">F</span>
            <span className="title2">IND</span>
          </h2>
          <p className="description">
            Sell your services, connect with fellow creators, and discover endless opportunities to collaborate, learn, and grow together.
          </p>
        </header>
        <SocialTrending />

        <div className="contain_tulisan9">
          <span className="contain_tulisan10">J</span>OIN <span className="contain_tulisan10">N</span>OW
        </div>

        <div className="gambar7"></div>
        <div className="gambar8"></div>

        <div className="content-description3">
          Join the community by starting to upload your services, showcase your unique talents, and connect with a vibrant community of creators ready to collaborate and elevate each other's projects.
        </div>

        <div className="content-description4">
          NB: Upload a file that contains a detailed description of your services, including examples of your work, to attract potential collaborators.
        </div>

        <div className="upload-section1 fade-in">
          <input
            type="file"
            id="file-upload1"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
          <label htmlFor="file-upload1" className="upload-button1">
            <span className="arrow">↑</span> Upload
          </label>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HalamanFind;
