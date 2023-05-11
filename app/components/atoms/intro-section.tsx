interface IntersectionProps {
  className?: string;
  children: React.ReactNode;
}

const IntroSection = ({ className, children }: IntersectionProps) => {
  return (
    <div className={`${className || ""} flex justify-center`}>
      <div className="max-w-screen-2xl">{children}</div>
    </div>
  );
};

export default IntroSection;
