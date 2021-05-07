import React, { useEffect } from 'react';
import Slideshow from '../slideshow/Slideshow';
import NewProducts from '../newProducts/NewProducts';

/**
 * @name Homepage
 * @description Displays homepage content
 * @returns homepage content
 */
const Homepage = () => {
  /**
   * Scrolls to top of page
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Slideshow />
      <NewProducts />
    </div>
  );
};

export default Homepage;
