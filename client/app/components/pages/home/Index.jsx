import React, { Component } from 'react';
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import MobileMenu from '../../shared/MobileMenu';
import Subscribe from '../../shared/Subscribe';
import Slider from './Slider';
import HowItWorks from './HowItWorks';
import About from './About';
import Brand from './Brand';
import BookHomeHouse from './BookHomeHouse';
import Blog from './Blog';
import Agents from './Agents';
import Clients from './Clients';

class Index extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <MobileMenu/>
        <Slider/>
        {/* Start page content */}
        <section id="page-content" className="page-wrapper">
          <HowItWorks/>
          <About/>
          <BookHomeHouse/>
          <Agents/>
          <Clients/>
          <Blog/>
          <Brand/>
          <Subscribe />
        </section>
        {/* End page content */}
        <Footer/>
      </div>
    )
  }
}

export default Index;
