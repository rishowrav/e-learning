import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

export default function App() {
  return (
    <>
      <main className="overflow-x-hidden bg-white text-dark">
        <Hero />
        <Services />
      </main>
    </>
  );
}
