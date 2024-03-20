import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="myfooter">
          <div className="our-container">
            <div className="sec aboutus">
              <h2>About Us</h2>
              <p>
                This site showcases handicraft products originating from Nepal,
                including handmade clothing, sweaters, and various art and metal
                crafts crafted by local artisans. The aim is to offer these
                handmade items for sale, fostering customer trust and
                satisfaction.
              </p>
              <ul className="sci">
                <li>
                  <Link to="https://www.facebook.com/">
                    <FaIcons.FaFacebook className="fa fa-facebook " />
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com/">
                    {" "}
                    <FaIcons.FaTwitter className="fa fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/">
                    <FaIcons.FaInstagram className="fa fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.youtube.com/">
                    <FaIcons.FaYoutube className="fa fa-youtube" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sec quicklinks">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <Link to="home">Home</Link>
                </li>
                <li>
                  <Link to="aboutus">About</Link>
                </li>
                <li>
                  <Link to="services">ProductList</Link>
                </li>
                <li>
                  <Link to="contact">Contact</Link>
                </li>
                <li>
                  <Link to="signup">Signup</Link>
                </li>
                <li>
                  <Link to="signin">Signin</Link>
                </li>
              </ul>
            </div>
            <div className="sec quicklinks">
              <h2>Shop</h2>
              <ul>
                <li>
                  <Link to="#">Clothes</Link>
                </li>
                <li>
                  <Link to="#">Metalcrafts</Link>
                </li>
                <li>
                  <Link to="#">Pashmina products</Link>
                </li>
                <li>
                  <Link to="#">Sweater Type</Link>
                </li>
                <li>
                  <Link to="#">Bags</Link>
                </li>
                <li>
                  <Link to="#">Art</Link>
                </li>
              </ul>
            </div>
            <div className="sec contact">
              <h2>Contact Us</h2>
              <ul className="info">
                <li>
                  <span>
                    <FaIcons.FaMarker className="fa fa-marker" />
                  </span>
                  <span>Kalanki, Kathmandu, Nepal</span>
                </li>
                <li>
                  <span>
                    <FaIcons.FaPhone className="fa fa-phone" />
                  </span>
                  <p>
                    <Link to="tel:+12345678900">+977 9869126819</Link>
                    <br />
                    <Link to="tel:+12345678900">+977 9869237920</Link>
                  </p>
                </li>
                <li>
                  <span>
                    <FaIcons.FaEnvelope className="fa fa-envelope" />
                  </span>
                  <p>
                    <Link to="https://mail.google.com/mail/u/0/#inbox">
                      rockingrupesh87@gmail.com
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
