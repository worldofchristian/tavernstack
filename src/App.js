import React from "react";
import Stats from "./components/Stats";
import MenuEditor from "./components/MenuEditor";
import Nav from "./components/Nav";
import Rating from "./components/Rating"
import Bookings from "./components/Bookings";
import Support from "./components/Support";

function App() {
  return (
    <>
    <Nav />

    <div
    className="flex-col items-center justify-center">

      <div
      className="flex mt-4 items-center justify-center">
        <Stats />
      </div>

      <div
      className="flex mt-4 items-center justify-center">
        <Rating />
      </div>

      <div
      className="flex mt-4 items-center justify-center">
        <MenuEditor />
      </div>

      <div
      className="flex mt-4 items-center justify-center">
        <Bookings />
      </div>

      <div
      className="flex mt-4 items-center justify-center">
        <Support />
      </div>

    </div>
    </>
  );
}

export default App;
