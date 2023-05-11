import IntroductionName from "./components/molecules/header";
import AboutMe from "./components/molecules/about-me";
import Projects from "./components/molecules/projects";

export default function Home() {
  return (
    <main className="min-h-screen m-auto">
      <IntroductionName />
      <AboutMe />
      <Projects />
    </main>
  );
}
