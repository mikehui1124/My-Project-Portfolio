import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Form from './Form/index';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <AboutMe />;
    }
    if (currentPage === 'About') {
      return <Portfolio />;
    }
    if (currentPage === 'Blog') {
      return <Form />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}
