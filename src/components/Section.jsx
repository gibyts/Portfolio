import { motion } from "framer-motion";

export default function Section({ children, className = "", id }) {
  return (
    <motion.section
      id={id} 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.1 }}
      className={className} 
    >
      {children}
    </motion.section>
  );
}
