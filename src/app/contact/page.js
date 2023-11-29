import Image from "next/image";
import Navbar from "../scenes/Navbar";
import Footer from "../scenes/Footer";
import ContactPage from "../scenes/ContactPage";

export default function Contact() {
  return (
    <main className="bg-white min-h-full">
      <Navbar />
      <ContactPage/>
      <Footer />
    </main>
  );
}