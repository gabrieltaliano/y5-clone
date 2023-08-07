import BigLogo from "./components/BigLogo";
import Quotes from "./components/Quotes";
import GalleryGrid from "./components/GalleryGrid";
import MainBackground from "./components/MainBackground";
import Presentation from "./components/Presentation";

export default function Home() {
  return (
    <>
      <MainBackground />
      <BigLogo />
      <Presentation />
      <Quotes />
      <GalleryGrid />
    </>
  );
}
