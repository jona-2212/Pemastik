import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HalamanUtama.css';
import Navbar from "../components/Navbar"; 
import Footer from '../components/Footer';

function SongList({ title, songs }) {
  return (
    <div className="playlist-container1 fade-in">
      <h1 className="playlist-title1">
        <span className="playlist-title-script">{title}</span>
      </h1>
      <ul className="song-list">
        {songs.map((song) => (
          <li key={song.id} className="song-item">
            <span className="song-rank">0{song.id}</span>
            <img src={song.image} alt={song.title} className="song-image" />
            <div className="song-info">
              <p className="song-title">{song.title}</p>
              <p className="song-artist">{song.artist}</p>
            </div>
            <button className="play-button">▶</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const HalamanUtama = () => {
  const [inputText, setInputText] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleInputChange = (event) => setInputText(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted Text: ${inputText}`);
    setInputText('');
  };
  const handleIconClick = () => alert(`Search Icon Clicked! Current Text: ${inputText}`);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
    alert(`File Uploaded: ${file.name}`);
  };

  const songs1 = [
    { id: 1, title: "Bad Habit", artist: "Steve Lacy", image: "BadHabbit.png" },
    { id: 2, title: "Unholy", artist: "Sam Smith", image: "Unholy.png" },
    { id: 3, title: "As It Was", artist: "Harry Styles", image: "AsItWas.png" },
    { id: 4, title: "I Ain't Worried", artist: "One Republic", image: "IAintWorried.png" },
    { id: 5, title: "Until I Found You", artist: "Stephen Sanchez", image: "UntilIFoundYou.png" },
  ];

  const songs2 = [
    { id: 1, title: "Separuh Napas", artist: "Dewa 19", image: "SeparuhNafas.png" },
    { id: 2, title: "Rapsodi", artist: "Laleilmanino", image: "Rapsodi.png" },
    { id: 3, title: "Senja Teduh Pelita", artist: "Maliq & D’Essentials", image: "SenjaTeduhPelita.png" },
    { id: 4, title: "Hati-Hati di Jalan", artist: "Tulus", image: "HatiDiJalan.png" },
    { id: 5, title: "Sang Dewi", artist: "Lyodra", image: "SangDewi.png" },
  ];

  return (
    <div className="app-container">
      <Navbar />
      <div className="gambar_navbar">
        <h1 className="gambar_contain fade-in">
          <span className="spesial_font fade-in">W</span>HAT to <span className="spesial_font">C</span>ONTENT
          <p className="gambar_contain1">
            Let AI help you. Discover trends, analyze performance, and get fresh ideas tailored to your <br />
            audience—all in one place. Create smarter, create faster.
          </p>

          <form className="gambar_contain2" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <span className="search-icon" onClick={handleIconClick}></span>
              <input
                className="search-input4"
                type="text"
                placeholder="What's on your mind?"
                value={inputText}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </h1>
      </div>

      <div className="middle">
        <h1 className="contain_tulisan fade-in">
          <span className="contain_tulisan1 fade-in">T</span>OPICS for <span className="contain_tulisan1 fade-in">Y</span>OU
        </h1>
        <div className="middle-content fade-in">
          <div className="contain_gambar2 fade-in">
            <br />
            <h1 className="tulisan2">The Rise of AI Art: How Creativity and Technology Are Merging</h1>
          </div>
          <div className="contain_gambar1 fade-in">
            <br />
            <h1 className="tulisan1">Why Minimalism and Subtle Elegance Are Taking Over Social Feeds</h1>
          </div>
          <div className="contain_gambar3 fade-in">
            <br />
            <h1 className="tulisan3">Microinfluencers Are the New Celebrities</h1>
          </div>
        </div>
        <Link to="/topics" className="see-more-btn fade-in">
          <span className="arrow">→</span> See More
        </Link>
      </div>

      <div className="middle1">
        <div className="dalam">
          <h1 className="contain_tulisan3 fade-in">
            <span className="contain_tulisan4 fade-in">T</span>RENDING <span className="contain_tulisan4 fade-in">S</span>ONGS
          </h1>
          <div className="playlist-wrapper1">
            <SongList title="Worldwide" songs={songs1} />
            <SongList title="Indonesia" songs={songs2} />
          </div>
          <Link to="/songs" className="see-more-btn1 fade-in">
            <span className="arrow">→</span> See More
          </Link>
        </div>
      </div>

      <div className="middle2">
        <h1 className="contain_tulisan5 fade-in">
          <span className="contain_tulisan6 fade-in">A</span>NALYZE
          <div className='gambar1'></div>
          <div className='gambar2'></div>
        </h1>
        <div className="upload-section fade-in">
          <input
            type="file"
            id="file-upload"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
          <label htmlFor="file-upload" className="upload-button fade-in">
            <span className="arrow">↑</span> Upload
          </label>
        </div>

        <p className="content-description fade-in">
          Simply upload your content, and our AI dives deep into the data, get a full analysis of how your content performs. Discover what works, what doesn’t, and get recommendations to improve your next post—effortlessly.
        </p>
      </div>

      <div className="middle3">
        <div className="dalam1">
          <h1 className="contain_tulisan7 fade-in">
            <span className="contain_tulisan8 fade-in">F</span>ELL and <span className="contain_tulisan8 fade-in">F</span>IND
          </h1>
          <div className='gambar3'></div>
          <div className='gambar4'></div>
          <div className='content-description1'>
            Join the community by starting upload your services, showcase your unique talents, and connect with a vibrant community of creators ready to collaborate and elevate each other's projects.
          </div>
          <div className='content-description2'>
            NB: Upload a file that contains a detailed description of your services, including examples of your work, to attract potential collaborators.
          </div>
          <Link to="/find" className="see-more-btn2 fade-in">
            <span className="arrow">→</span> See More
          </Link>
        </div>
      </div>

      {/* Footer section, placed at the end of the page */}
      <Footer />
    </div>
  );
};

export default HalamanUtama;
