import Image from 'next/image'
import Navbar from "./scenes/Navbar";
import Footer from "./scenes/Footer";

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen">
      <Navbar/>
      <Footer/>
    </main>
  )
}
