import MainLayout from "@layouts/MainLayout";
import { Hero,About ,TechStack,Services ,Projects , Experience,Contact,Testimonials} from "@sections";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <TechStack />
      <Services />
      <Projects />
      <Experience />
      {/* <Testimonials/> */}
       <Contact />
    </MainLayout>
  );
}