import IntroductionName from "./components/molecules/header";
import ColorFollowCursorBg from "./components/atoms/color-follow-cursor-bg";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <ColorFollowCursorBg> */}
      <IntroductionName />
      {/* </ColorFollowCursorBg> */}
    </main>
  );
}
