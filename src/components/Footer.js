import React from 'react';

const Footer = () => (
  <footer className="text-center py-5" style={{ backgroundColor: '#343a40', color: 'white' }}>
    <div className="container py-md-3">
      <p className="text-muted">An Environmental Intelligence Project</p>
      <div className="mt-4">
        <a href="#" className="text-white mx-3" style={{ fontSize: '1.5rem' }}><i className="fa fa-facebook"></i></a>
        <a href="#" className="text-white mx-3" style={{ fontSize: '1.5rem' }}><i className="fa fa-twitter"></i></a>
        <a href="#" className="text-white mx-3" style={{ fontSize: '1.5rem' }}><i className="fa fa-linkedin"></i></a>
        <a href="#" className="text-white mx-3" style={{ fontSize: '1.5rem' }}><i className="fa fa-instagram"></i></a>
      </div>
      <div className="text-center mt-4">
        <p>Made by TEAM 78</p>
        <p>&copy; 2025 MIET College Project</p>
      </div>
    </div>
  </footer>
);

export default Footer;
