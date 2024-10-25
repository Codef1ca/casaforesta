import { motion } from "framer-motion"; // Importa motion de framer-motion
import { useRef, useState, useEffect } from "react";

interface AnimatedComponentProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Lógica de animación
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
