// src/App.jsx
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Brand from "./sections/Brand";
import Ingredients from "./sections/Ingredients";
import Reviews from "./sections/Reviews";
import Cta from "./sections/Cta";
import Footer from "./components/Footer";
import Products from "./sections/Products";
import "./styles/main.scss";
import { useState } from 'react'
export default function App() {
  return (
  < >
      <Header />
      <main>
        <section className="Section" id="Hero"><Hero /></section>
        <section className="Section" id="Brand"><Brand /></section>
        <section className="Section" id="Products"><Products /></section>
        <section className="Section" id="Ingredients"><Ingredients /></section>
        <section className="Section" id="Reviews"><Reviews /></section>
        <section className="Section" id="Contact"><Cta /></section>
      </main>
      <Footer />
    </>
  );
}
