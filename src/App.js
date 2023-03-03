import React, { useState } from 'react';
import GetStarted from "./pages/GetStarted";
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

    <GetStarted />
    </>
  );
}

export default App;
