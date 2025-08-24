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

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section id="Hero"><Hero /></section>
        <section id="Brand"><Brand /></section>
        <section id="Products"><Products /></section>
        <section id="Ingredients"><Ingredients /></section>
        <section id="Reviews"><Reviews /></section>
        <section id="Contact"><Cta /></section>
      </main>
      <Footer />
    </>
  );
}
