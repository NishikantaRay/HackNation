import React from "react";
import Navbar from "../components/Navbar";
import FooterPage from "../components/Footer/FooterPage";
import Header from "../components/Header";
import Features from "../components/Features";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <FooterPage />
    </>
  );
}
