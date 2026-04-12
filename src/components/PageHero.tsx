import AnimatedSection from "./AnimatedSection";
import { Link } from "react-router-dom";

interface PageHeroProps {
  label?: string;
  headline: string;
  body: string;
  ctaText?: string;
  ctaLink?: string;
}

const PageHero = ({ label, headline, body, ctaText, ctaLink }: PageHeroProps) => {
  return (
    <section className="section-dark pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-6 max-w-4xl">
        {label && (
          <AnimatedSection>
            <p className="section-label mb-6">{label}</p>
          </AnimatedSection>
        )}
        <AnimatedSection delay={0.1}>
          <h1 className="heading-hero text-primary-foreground mb-6">{headline}</h1>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="body-large text-primary-foreground/70 max-w-3xl">{body}</p>
        </AnimatedSection>
        {ctaText && ctaLink && (
          <AnimatedSection delay={0.3}>
            <Link to={ctaLink} className="btn-primary mt-8 inline-flex">
              {ctaText}
            </Link>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default PageHero;
