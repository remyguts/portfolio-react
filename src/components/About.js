import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="My Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Info</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {city}, {state}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>
                    <a href="mailto:remyguts@gmail.com">{email}</a>
                  </span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    href={resumeDownload}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
