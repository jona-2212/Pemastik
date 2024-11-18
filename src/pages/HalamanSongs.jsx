import React from 'react';
import './HalamanSongs.css';
import Navbar from "../components/Navbar"; 
import Footer from '../components/Footer';

function SongList({ title, songs }) {
  return (
    <div className="playlist-container fade-in">
      <h1 className="playlist-title">{title}</h1>
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

const SocialTrending = () => {
  const instagramPosts = [
    { id: 1, username: '@helohihi', views: '1.5M views', image: "songs1.png" },
    { id: 2, username: '@keren_nih', views: '1.2M views', image: "songs2.png" },
    { id: 3, username: '@bisnistruzzz', views: '998K views', image: "songs3.png" },
  ];

  const tiktokPosts = [
    { id: 1, username: '@helohihi', views: '1.5M views', image: "songs1.png" },
    { id: 2, username: '@keren_nih', views: '1.2M views', image: "songs2.png" },
    { id: 3, username: '@bisnistruzzz', views: '998K views', image: "songs3.png" },
  ];

  return (
    <div>
      {/* Instagram Section */}
      <section className="trending-section fade-in">
        <div className="ig">
          <img src="ig.png" alt="Instagram logo" />
          <h2>
            <span className="highlight1">I</span>
            <span className="title1">NSTAGRAM</span>
          </h2>
        </div>
        <div className="social-trending">
          <h2 className="section-title">
            Tap into trending Instagram sounds and elevate your content. Let your creativity shine with the beats everyone’s talking about!
          </h2>
          <div className="post-container">
            {instagramPosts.map((post) => (
              <div key={post.id} className="post-card">
                <img src={post.image} alt={post.username} className="post-image" />
                <p className="post-username">{post.username}</p>
                <p className="post-views">{post.views}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TikTok Section */}
      <section className="trending-section">
        <div className="ig">
          <img src="tiktok.png" alt="TikTok logo" />
          <h2>
            <span className="highlight1">T</span>
            <span className="title1">IKTOK</span>
          </h2>
        </div>
        <div className="social-trending">
          <h2 className="section-title">
            Discover the hottest TikTok sounds and amplify your content. Find out what’s trending and make waves on TikTok!
          </h2>
          <div className="post-container">
            {tiktokPosts.map((post) => (
              <div key={post.id} className="post-card">
                <img src={post.image} alt={post.username} className="post-image" />
                <p className="post-username">{post.username}</p>
                <p className="post-views">{post.views}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const HalamanSongs = () => {
  const songsWorldwide = [
    { id: 1, title: "Bad Habit", artist: "Steve Lacy", image: "BadHabbit.png" },
    { id: 2, title: "Unholy", artist: "Sam Smith", image: "Unholy.png" },
    { id: 3, title: "As It Was", artist: "Harry Styles", image: "AsItWas.png" },
    { id: 4, title: "I Ain't Worried", artist: "One Republic", image: "IAintWorried.png" },
    { id: 5, title: "Until I Found You", artist: "Stephen Sanchez", image: "UntilIFoundYou.png" },
    { id: 6, title: "Bad Habit", artist: "Steve Lacy", image: "BadHabbit.png" },
    { id: 7, title: "Unholy", artist: "Sam Smith", image: "Unholy.png" },
    { id: 8, title: "As It Was", artist: "Harry Styles", image: "AsItWas.png" },
    { id: 9, title: "I Ain't Worried", artist: "One Republic", image: "IAintWorried.png" },
    { id: 10, title: "Until I Found You", artist: "Stephen Sanchez", image: "UntilIFoundYou.png" },
  ];

  const songsIndonesia = [
    { id: 1, title: "Separuh Napas", artist: "Dewa 19", image: "SeparuhNafas.png" },
    { id: 2, title: "Rapsodi", artist: "Laleilmanino", image: "Rapsodi.png" },
    { id: 3, title: "Senja Teduh Pelita", artist: "Maliq & D’Essentials", image: "SenjaTeduhPelita.png" },
    { id: 4, title: "Hati-Hati di Jalan", artist: "Tulus", image: "HatiDiJalan.png" },
    { id: 5, title: "Sang Dewi", artist: "Lyodra", image: "SangDewi.png" },
    { id: 6, title: "Separuh Napas", artist: "Dewa 19", image: "SeparuhNafas.png" },
    { id: 7, title: "Rapsodi", artist: "Laleilmanino", image: "Rapsodi.png" },
    { id: 8, title: "Senja Teduh Pelita", artist: "Maliq & D’Essentials", image: "SenjaTeduhPelita.png" },
    { id: 9, title: "Hati-Hati di Jalan", artist: "Tulus", image: "HatiDiJalan.png" },
    { id: 10, title: "Sang Dewi", artist: "Lyodra", image: "SangDewi.png" },
  ];

  return (
    <>
      <Navbar />
      <div className="container5 fade-in">
        <header className="footer fade-in trending-section">
          <h2>
            <span className="highlight">T</span>
            <span className="title">RENDING </span>
            <span className="highlight">S</span>
            <span className="title">ONGS</span>
          </h2>
          <p className="description">
            Explore trending topics driven by AI insights from social media. Discover what matters now and create content that truly engages.
          </p>
        </header>
        <div className="playlist-wrapper">
          <SongList title="Worldwide" songs={songsWorldwide} />
          <SongList title="Indonesia" songs={songsIndonesia} />
        </div>
        
        {/* Trending Songs Section */}
        <section className="footer fade-in trending-section">
          <h2>
            <span className="highlight">T</span>
            <span className="title">RENDING</span>
            <span className="highlight"> S</span>
            <span className="title">OUNDS</span>
          </h2>
        </section>

        {/* SocialTrending Component */}
        <SocialTrending />
      </div>
      <Footer />
    </>
  );
};

export default HalamanSongs;
