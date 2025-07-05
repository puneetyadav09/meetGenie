import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PageLayout = ({ children, title, description }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {(title || description) && (
          <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              {title && (
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {title}
                </h1>
              )}
              {description && (
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          </div>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;