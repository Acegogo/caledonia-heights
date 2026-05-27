import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeUpVariant } from '../utils/animations';

const Section = ({ children, className = '', variant = 'dark', id = '' }) => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const v =
    variant === 'surface' ? 'section--dark' :
      variant === 'surface2' ? 'section--surface2' :
        'section--deep';

  return (
    <section id={id} className={`section ${v} ${className}`}>
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
