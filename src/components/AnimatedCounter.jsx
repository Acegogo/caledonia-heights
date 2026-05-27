import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ value, suffix = '', prefix = '', duration = 1.8, className = '' }) => {
  const [ref, inView] = useInView({ threshold: 0.35, triggerOnce: true });

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp end={value} duration={duration} prefix={prefix} suffix={suffix} />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  );
};

export default AnimatedCounter;

