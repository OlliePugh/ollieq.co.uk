import IntroSection from "../atoms/intro-section";

const AboutMe = () => {
  return (
    <IntroSection className="bg-slate-100">
      <div className="py-8 px-16 md:px-0">
        <h1 className="text-center font-bold text-2xl">About Me</h1>
        <div className="flex flex-col-reverse md:flex-row justify-evenly pt-8">
          <div className="basis-2/5">WIP</div>
          <p className="basis-2/5 text-gray-600 text-center md:text-left">
            {`Hey! I'm Ollie, I am a software engineer that also posts content on
          social media related to engineering. I love programming, video editing
          and dabbling with electronics.`}
          </p>
        </div>
      </div>
    </IntroSection>
  );
};

export default AboutMe;
