import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Hero } from "./Hero_Section/Hero";
import { About } from "./About_Section/About";
import { Event } from "./Event_Section/Event";
import { Contact } from "./Contact_Section/Contact";

export const Home = () => {
  return (
    <>
      <div id="navbar">
        <Navbar />
      </div>

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>
      
      <section id="event">
        <Event />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};
