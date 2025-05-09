import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default App;
