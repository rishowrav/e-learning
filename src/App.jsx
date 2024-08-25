import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

export default function App() {
  return (
    <>
      <main className="overflow-x-hidden bg-white text-dark">
        <Hero />
        <Services />
        <Banner />
      </main>
    </>
  );
}
