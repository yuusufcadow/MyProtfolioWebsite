import {
  Outlet,
} from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import PortfolioChatbot from "../components/chatbot/PortfolioChatbot";
import SocialAside from "../components/SocialAside";

export default function MainLayout() {
  return (
    <div
      className="
        min-h-screen

        bg-white
        text-zinc-950

        transition-colors
        duration-300

        dark:bg-[#09090b]
        dark:text-white
      "
    >
      <Navbar />

      <SocialAside />

      <main
        className="
          min-h-screen

          pb-12

          xl:pb-0
        "
      >
        <Outlet />
      </main>

      <Footer />

      <PortfolioChatbot />
    </div>
  );
}