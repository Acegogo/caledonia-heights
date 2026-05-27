import { motion } from 'framer-motion';
import { staggerContainer, fadeUpVariant } from '../utils/animations';
import HeroBackground from './HeroBackground';
import Button from './Button';
import './PageHero.css';

const PageHero = ({
  title,
  subtitle,
  badge,
  tagline,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  bgVariant = 'surface',
  accent,
  backgroundImage,
}) => {
  const bgClass = bgVariant === 'surface2' ? 'page-hero--surface2' : 'page-hero--surface';
  const accentClass = accent === 'green' ? 'page-hero--accent-green' : 'page-hero--accent-cyan';
  const hasPhoto = Boolean(backgroundImage);

  return (
    <header
      className={`page-hero ${bgClass} ${accentClass}${hasPhoto ? ' page-hero--photo' : ''}`}
      style={hasPhoto ? { '--hero-bg': `url(${backgroundImage})` } : undefined}
    >
      {!hasPhoto && <HeroBackground />}

      <div className="container page-hero__inner">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="page-hero__content"
        >
          {badge ? (
            <motion.div variants={fadeUpVariant} className="page-hero__badge">
              {badge}
            </motion.div>
          ) : null}

          <motion.h1 variants={fadeUpVariant} className="page-hero__title">
            {title}
          </motion.h1>

          {tagline ? (
            <motion.p variants={fadeUpVariant} className="page-hero__tagline">
              {tagline}
            </motion.p>
          ) : null}

          {subtitle ? (
            <motion.p variants={fadeUpVariant} className="page-hero__subtitle text-muted">
              {subtitle}
            </motion.p>
          ) : null}

          {(ctaText && ctaLink) || (secondaryCtaText && secondaryCtaLink) ? (
            <motion.div variants={fadeUpVariant} className="page-hero__actions">
              {ctaText && ctaLink ? (
                ctaLink.startsWith('http') || ctaLink.startsWith('tel:') ? (
                  <Button
                    className="btn-primary"
                    href={ctaLink}
                    target={ctaLink.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    {ctaText} →
                  </Button>
                ) : (
                  <Button className="btn-primary" to={ctaLink}>
                    {ctaText} →
                  </Button>
                )
              ) : null}
              {secondaryCtaText && secondaryCtaLink ? (
                secondaryCtaLink.startsWith('http') || secondaryCtaLink.startsWith('tel:') ? (
                  <Button
                    className="btn-outline"
                    href={secondaryCtaLink}
                    target={secondaryCtaLink.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    {secondaryCtaText} →
                  </Button>
                ) : (
                  <Button className="btn-outline" to={secondaryCtaLink}>
                    {secondaryCtaText} →
                  </Button>
                )
              ) : null}
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </header>
  );
};

export default PageHero;
