import { motion } from 'framer-motion';

const FadeInWrapper = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut', delay }}
  >
    {children}
  </motion.div>
);

export default FadeInWrapper;
