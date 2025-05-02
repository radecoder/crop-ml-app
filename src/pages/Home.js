import React from 'react';
import farmImage from '../assets/farm_background.jpg';
import serviceImage from '../assets/s3.jpg';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <section className="banner_w3lspvt" id="home">
      <div className="overlay text-center text-light py-5" style={{ background: '#343a40' }}>
        <h3>Agriculture Crop Recommendation</h3>
        <h4><b>Based on Productivity and Seasons</b></h4>
        <h4><strong>Here are some questions we'll answer</strong></h4>
        <p>
          1. What crop to plant here? <br />
          2. What fertilizer to use? <br />
          3. Which disease do your crop have?<br />
          4. How to cure the disease?
        </p>
      </div>
    </section>

    <section className="core-value py-5">
      <div className="container">
        <h3 className="heading mb-5 text-center">About Us</h3>
        <div className="row core-grids">
          <div className="col-lg-6">
            <img src={farmImage} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6">
            <h3 className="mt-4">
              Improving Agriculture, Improving Lives, Cultivating Crops To Make Farmers Increase Profit.
            </h3>
            <p className="mt-3">
              We use state-of-the-art machine learning and deep learning technologies to help guide through
              the farming process...
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="blog py-5">
      <div className="container">
        <h3 className="heading mb-4 text-center">Our Services</h3>
        <div className="row blog-grids">
          <div className="col-lg-4 col-md-6 blog-left mb-4">
            <img src={serviceImage} className="img-fluid" alt="Crop" />
            <Link to="/crop">
              <div className="blog-info">
                <h4>Crop</h4>
                <p className="mt-2">
                  Recommendation about the type of crops to be cultivated best suited for respective conditions.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Home;
