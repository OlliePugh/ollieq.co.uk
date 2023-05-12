import FadeInSection from "./fade-in-section";

interface IntersectionProps {
  className?: string;
  children: React.ReactNode;
}

const IntroSection = ({ className, children }: IntersectionProps) => {
  return (
    <FadeInSection>
      <div className={`${className ? className : ""} flex justify-center`}>
        <div className="max-w-screen-2xl w-full">{children}</div>
      </div>
    </FadeInSection>
  );
};

export default IntroSection;
