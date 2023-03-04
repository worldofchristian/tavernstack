import React, { useState } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import NavDropdown from './components/NavDropdown';

function App() {

  const [isOpen, setOpen ] = useState(true)

    const toggle = () => {
        setOpen(!isOpen)
    }

  return (
    <>
    <Navbar toggle={toggle} />
    <NavDropdown isOpen={!isOpen} toggle={toggle} />

    <Home />
    </>
  );
}

export default App;
