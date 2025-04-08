import Banner from "../components/Home/Banner";
import MainHeader from "../components/Home/MainHeader";
import ContentSection from "../components/Home/ContentSection";
import MainFooter from "../components/Home/MainFooter";
import Footer from "../components/Home/Footer";

import "../styles/Home.css";

function Home() {
  return (
    <>
      <header>
        <Banner />
      </header>

      <main>
        <MainHeader />
        <ContentSection />
        <MainFooter />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
