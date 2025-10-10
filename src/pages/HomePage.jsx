import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import OurWorkSection from "../components/OurWorkSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <Container>
      <HeroSection />
      <WhatWeDoSection />
      <OurWorkSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <Footer />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  z-index: 10;
`;
