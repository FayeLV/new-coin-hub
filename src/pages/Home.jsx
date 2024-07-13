import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Join from "../components/join/Join";
import MarketUpdate from "../components/marketUpdate/MarketUpdate";
import WhyUs from "../components/whyUs/WhyUs";

function Home() {
  return (
    <>
      <Hero />
      <MarketUpdate />
      <WhyUs />
      <Join />
      <Footer />
    </>
  );
}

export default Home;
