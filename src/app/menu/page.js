import Image from "next/image";
import Navbar from "../scenes/Navbar";
import Footer from "../scenes/Footer";

export default function Menu() {
  return (
    <main className="bg-white min-h-full">
      <Navbar />
      <Footer />
    </main>
  );
}