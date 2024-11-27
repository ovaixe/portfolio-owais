import Bio from "@/components/Bio";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import GetinTouch from "@/components/GetinTouch";

export default function Home() {
  return (
    <main className={`flex flex-col items-center p-5 pt-20 pb-32`}>
      <Bio />
      <Work />
      <Skills />
      <Resume />
      <GetinTouch />
    </main>
  );
}
