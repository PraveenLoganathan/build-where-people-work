import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

const StatCounter = ({ value, label, prefix = "", suffix = "" }: StatCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
    if (isNaN(numericValue)) {
      setDisplay(value);
      return;
    }
    const duration = 1500;
    const steps = 40;
    const increment = numericValue / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        clearInterval(timer);
        setDisplay(value);
      } else {
        setDisplay(Math.floor(current).toLocaleString());
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="stat-number">
        {prefix}{display}{suffix}
      </div>
      <p className="text-sm font-body text-primary-foreground/60 mt-2 tracking-wide">{label}</p>
    </motion.div>
  );
};

export default StatCounter;
