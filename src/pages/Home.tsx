import Hero from "../animations/Hero";
import ParallaxSection from "../components/ParallaxSection";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ParallaxSection />
      {/* Tambahkan section lain */}
    </div>
  );
};

export default Home;
