import "./Home.css";
import Header from "../../components/Home/Header/Header";
import Hero from "../../components/Home/Hero/Hero";
import HelpSection from "../../components/Home/HelpSection/HelpSection";
import WaveDivider from "../../components/Home/WaveDivider/WaveDivider";
import InfoSection from "../../components/Home/InfoSection/InfoSection";
import HowItWorks from "../../components/Home/HowItWorks/HowItWorks";
import Resources from "../../components/Home/Resources/Resources";
import Quote from "../../components/Home/Quote/Quote";
import Registration from "../Registration/Registration";
import Authorization from "../Authorization/Authorization";
import Footer from "../../components/Footer/Footer";
import Profile from "../Profile/Profile";
import Error404 from "../not-found/not-found";
import Result from "../Result/Result";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <HelpSection />
        <WaveDivider />
        <InfoSection />
        <HowItWorks />

        <Resources />
        <Quote />
        <Registration />
        <Authorization />
        <Footer />
        <Profile />
        <Error404 />
        <Result />
      </main>
    </>
  );
}
