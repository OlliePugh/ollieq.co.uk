import IntroSection from "../atoms/intro-section";

const AboutMe = () => {
  return (
    <IntroSection className="bg-slate-100">
      <div className="py-8 px-16 md:px-0">
        <h1 className="text-center font-bold text-2xl">Motives</h1>
        <div className="flex flex-col-reverse md:flex-row justify-evenly pt-8">
          <p className="basis-2/5 text-gray-600 text-center md:text-left">
            {`The goal for my projects and content is to encourage young people
            to think about engineering, not only as a hobby but potentially as a
            career path. I find the best way to do this is through creating 
            projects that allow people to interact directly with something that
            has been engineered`}
          </p>
          <div className="basis-2/5">WIP</div>
        </div>
      </div>
    </IntroSection>
  );
};

export default AboutMe;
