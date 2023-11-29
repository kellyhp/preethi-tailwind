import Image from "next/image";
import Navbar from "../scenes/Navbar";
import Footer from "../scenes/Footer";
import CateringPage from "../scenes/CateringPage";

export default function Catering() {
  return (
    <main className="bg-white min-h-full">
      <Navbar />
      <CateringPage/>
      <Footer />
    </main>
  );
}