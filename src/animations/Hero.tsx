import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="hero"
    >
      <h1>Perubahan Iklim</h1>
      <p>Mari selamatkan bumi bersama.</p>
    </motion.div>
  );
};

export default Hero;
