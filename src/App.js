import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects'

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    
    { name: 'PROJECTS', description: 'Full stack applications' },
    { name: 'RESUME' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
       />
      <main>
        <div>
        {!contactSelected ? (
          <>
            
            <About />
            <Gallery currentCategory={currentCategory} />
          </>
        ) : (
            <ContactForm />
          )}
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
