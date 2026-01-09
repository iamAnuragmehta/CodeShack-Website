import { React, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Hero } from "./Hero_Section/Hero";
import { About } from "./About_Section/About";
import { Event } from "./Event_Section/Event";

export const Home = () => {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="event">
        <Event />
      </section>
    </>
  );
};