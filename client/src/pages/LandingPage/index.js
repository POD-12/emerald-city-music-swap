import React from 'react';
import Carousel from '../../components/Carousel';
import FeaturedCards from '../../components/FeaturedCards';

const LandingPage = () => {

    return (
      <div> 
      <h1 className="text-center mt-5 mb-5">
     Welcome!
 </h1>
  <Carousel />
  <FeaturedCards />
</div>
    )
}
export default LandingPage;