import Hero from "../animations/Hero";
import AirQualityChart from "../components/AirQualityChart";
import APOD from "../components/Apod";
import ParallaxSection from "../components/ParallaxSection";
import SeaIce from "../components/SeaIce";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ParallaxSection />
      <APOD />
      {/* <AirQualityChart /> */}
      <SeaIce />
      {/* Tambahkan section lain */}
    </div>
  );
};

export default Home;
