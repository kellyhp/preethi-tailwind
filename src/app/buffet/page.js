import Image from "next/image";
import Navbar from "../scenes/Navbar";
import Footer from "../scenes/Footer";
import BuffetPage from "../scenes/BuffetPage";

export default function Buffet() {
  return (
    <main className="bg-white min-h-full">
      <Navbar />
      <BuffetPage/>
      <Footer />
    </main>
  );
}