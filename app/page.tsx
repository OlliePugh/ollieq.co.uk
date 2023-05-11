import IntroductionName from "./components/molecules/header";
import AboutMe from "./components/molecules/about-me";

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-2xl m-auto">
      <IntroductionName />
      <AboutMe />
    </main>
  );
}
