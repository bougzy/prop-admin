import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          {/* Company Information */}
          <Col md={4} className="mb-4">
            <h5>About Us</h5>
            <p>
              We are a leading real estate company dedicated to providing the best
              property listings in the region. Our mission is to make buying, selling,
              and renting properties easier and more accessible for everyone.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/properties" className="text-white">
                  Properties
                </a>
              </li>
              <li>
                <a href="/about" className="text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Information */}
          <Col md={4} className="mb-4">
            <h5>Contact Us</h5>
            <p>
              <strong>Email:</strong> info@realestate.com
            </p>
            <p>
              <strong>Phone:</strong> +123 456 7890
            </p>
            <div className="d-flex">
              {/* Social Media Icons */}
              <a href="https://facebook.com" className="text-white me-3">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" className="text-white me-3">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-white me-3">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} Real Estate Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
