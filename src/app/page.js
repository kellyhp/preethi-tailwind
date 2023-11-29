import Image from "next/image";
import Navbar from "./scenes/Navbar";
import Footer from "./scenes/Footer";
import Homepage from "./scenes/Homepage";

export default function Home() {
  return (
    <main className="bg-white min-h-full">
      <Navbar />
      <Homepage />
      <Footer />
    </main>
  );
}
