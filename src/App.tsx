import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import Footer from './components/Footer'
// import MultiStepForm from './components/MultiStepForm';

// Main App component with routing
const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            {/* <Route path="/" element={<MultiStepForm />} /> */}
            <Route
              path="/success"
              element={<div className="p-6 text-center">Success!</div>}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
