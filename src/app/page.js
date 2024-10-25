import "../blocks/globals.css"
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Cards />
    </div>
  );
}
