import React, { Fragment, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const About = () => {
  const [toggleTab, setToggleTab] = useState(1);

  const toggleState = (index) => {
    setToggleTab(index);
  };

  return (
    <Fragment>
      <Navbar/>
      <section className="about">
        <div className="row">
          <div className="column">
            <div className="about-img"></div>
          </div>
          <div className="column">
            <div className="tabs">
              <div
                className={toggleTab === 1 ? 'single-tab active-tab' : 'single-tab'}
                onClick={() => toggleState(1)}
              >
                <h2>Our Mission</h2>
              </div>
              <div
                className={toggleTab === 2 ? 'single-tab active-tab' : 'single-tab'}
                onClick={() => toggleState(2)}
              >
                <h2>Our Story</h2>
              </div>
              <div
                className={toggleTab === 3 ? 'single-tab active-tab' : 'single-tab'}
                onClick={() => toggleState(3)}
              >
                <h2>Our Values</h2>
              </div>
            </div>
            <div className="tab-content">
              {/* Our mission Content */}
              <div className={toggleTab === 1 ? 'content active-content' : 'content'}>
                
                <p>
                At Sneakershack, our mission is to provide customers with the ultimate sneaker shopping experience. We are dedicated to curating a wide range of stylish and comfortable sneakers that cater to various tastes and preferences. Our goal is to become the go-to destination for sneaker enthusiasts who seek both quality and style.
                </p>
                <p>
                We understand the importance of footwear that not only looks great but also supports an active lifestyle. That's why we carefully select sneakers from renowned brands known for their commitment to quality and performance. Whether you're an athlete looking for high-performance sneakers or a fashion-forward individual seeking the latest trends, our mission is to offer a diverse collection that caters to your needs.
                </p>
                <p>
                Additionally, exceptional customer service is at the core of our mission. We strive to provide prompt and personalized assistance to ensure that every customer has a seamless shopping experience. Our dedicated team is always ready to address any inquiries, offer expert advice, and ensure your satisfaction from browsing to checkout.
                </p>
              </div>



              {/* Our story Content */}
              <div className={toggleTab === 2 ? 'content active-content' : 'content'}>
                
                <p>
                The story of Sneakershack began with a passion for sneakers and a vision to create an online destination that meets the needs of sneaker enthusiasts worldwide. As avid sneaker collectors ourselves, we understood the struggle of finding the perfect pair that combines style, comfort, and quality. This realization fueled our desire to bridge the gap between sneaker enthusiasts and a vast selection of premium sneakers.
                </p>
                <p>
                Founded in 2023 by a group of friends who shared a common love for sneakers, Sneakershack started as a small online store operating out of a garage. With determination and a commitment to excellence, we began curating a carefully selected range of sneakers, focusing on authenticity, style, and comfort. As our customer base grew, so did our passion for delivering the best sneaker shopping experience possible.
                </p>
                <p>
                Today, Sneakershack stands as a trusted and reputable online destination for sneaker enthusiasts. We take pride in our journey and remain committed to delivering exceptional sneakers that allow you to express your unique style while staying comfortable and confident.
                </p>

                
              </div>



              {/* Our values Content */}
              <div className={toggleTab === 3 ? 'content active-content' : 'content'}>
                <div className="exp-column">
                  <span>Innovation:</span>
                  <p>
                  We embrace innovation to continuously improve our services and stay at the forefront of the ever-evolving sneaker industry. From implementing advanced technologies on our website to exploring sustainable packaging solutions, we strive to find creative ways to enhance your shopping experience while reducing our environmental impact.
                  </p>
                </div>

                <div className="exp-column">
                  <span>Sustainability: </span>
                  <p>
                  We recognize our responsibility to the environment and aim to promote sustainability throughout our operations. We actively seek out eco-friendly practices, from partnering with brands that prioritize sustainable materials and manufacturing processes to implementing packaging initiatives that minimize waste.
                  </p>
                </div>

                <div className="exp-column">
                  <span>Inclusivity: </span>
                  <p>
                  We celebrate diversity and believe that sneakers are for everyone. Our collection encompasses a wide range of styles, sizes, and price points to ensure that every individual, regardless of gender, age, or personal taste, can find their perfect pair of sneakers. We are committed to fostering an inclusive community that embraces individuality and encourages self-expression
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </Fragment>
  );
};

export default About;