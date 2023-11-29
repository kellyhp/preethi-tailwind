import Image from "next/image";
import Navbar from "../scenes/Navbar";
import Footer from "../scenes/Footer";
import MenuPage from "../scenes/MenuPage";

export default function Menu() {
  return (
    <main className="bg-white min-h-full">
      <Navbar />
      <MenuPage />
      <Footer />
    </main>
  );
}