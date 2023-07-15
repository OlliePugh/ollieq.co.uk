import IntroductionName from "./components/molecules/header";
import AboutMe from "./components/molecules/about-me";
import Projects from "./components/molecules/projects";
import Motives from "./components/molecules/motives";

export default function Home() {
  return (
    <main className="min-h-screen m-auto">
      <IntroductionName />
      <AboutMe />
      <Projects />
      <Motives />
    </main>
  );
}
