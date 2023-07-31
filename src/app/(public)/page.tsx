import BigLogo from "./components/BigLogo";
import Dexter from "./components/Dexter";
import GalleryGrid from "./components/GalleryGrid";
import Legend from "./components/Legend";
import MainBackground from "./components/MainBackground";
import Presentation from "./components/Presentation";

export default function Home() {
  return (
    <>
      <MainBackground />
      <BigLogo />
      <Legend />
      <Presentation />
      <Dexter />
      <GalleryGrid />
    </>
  );
}
