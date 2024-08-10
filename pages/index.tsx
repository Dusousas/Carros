import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Main from "@/components/Main";
import Vehicles from "@/components/Vehicles";
import Contact from "@/components/Contact";
import Sell from "@/components/Sell";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <NavBar />
    <Main />
    <Vehicles />
    <Sell />
    <Contact />
    <Footer />
    </>
  );
}
