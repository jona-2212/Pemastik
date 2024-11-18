import React from 'react';
import './HalamanProfil.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HalamanProfil = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Data saved successfully!');
  };

  return (
    <>
      <Navbar />
      <div className="container13 fade-in">
        <div className="profile-container">
          <div className="profile-header">
            <img
              src="pro.png" // Ganti dengan lokasi file foto Anda
              alt="User Profile"
              className="profile-picture"
            />
            <div className="profile-info">
              <h2>Alexa Rawles</h2>
              <p>alexarawles@gmail.com</p>
            </div>
            <button type="button" className="edit-button">Edit</button>
          </div>
           
          <form className="profile-form" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="form-group form-group-fullname">
              <label>Full Name</label>
              <input type="text" placeholder="Your Full Name" required />
            </div>

            {/* Nick Name */}
            <div className="form-group form-group-nickname">
              <label>Nick Name</label>
              <input type="text" placeholder="Your Nick Name" />
            </div>

            {/* Gender */}
            <div className="form-group form-group-gender">
              <label>Gender</label>
              <select required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Country */}
            <div className="form-group form-group-country">
              <label>Country</label>
              <input type="text" placeholder="Your Country" />
            </div>

            {/* Email Address */}
            <div className="form-group form-group-email">
              <label>Email Address</label>
              <input type="email" placeholder="Your Email Address" required />
            </div>

            {/* Interests */}
            <div className="form-group form-group-interests">
              <label>Interests</label>
              <div className="interests-container">
                <div className="interests">
                  <div className="interest-item">Fashion & Style</div>
                  <div className="interest-item">Entertainment & Pop Culture</div>
                  <div className="interest-item">Entrepreneurship & Business</div>
                  <div className="interest-item">Travel & Adventure</div>
                  <div className="interest-item">Sustainability & Eco Living</div>
                  <div className="interest-item">Tech & Innovation</div>
                </div>
                <input
                  type="text"
                  className="interest-input"
                  placeholder="What else are you interested in?"
                />
              </div>
            </div>

          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HalamanProfil;
