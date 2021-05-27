<template>
  <Navbar />
  <div class="content">
    <LandingSection />
    <Steps />
    <InspirationalPanel />
    <TestimonialsSection />
    <MobileAppSection />
    <TopTrades />
  </div>
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar/Navbar";
import LandingSection from "./layouts/LandingSection/LandingSection";
import Steps from "./layouts/Steps/Steps";
import InspirationalPanel from "./layouts/InspirationalPanel/InspirationalPanel";
import TopTrades from "./layouts/TopTradesSection/TopTradesSection";
import TestimonialsSection from "./layouts/TestimonialsSection/TestimonialsSection";
import MobileAppSection from "./layouts/MobileAppSection/MobileAppSection";
import Footer from "./components/Footer/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    LandingSection,
    Steps,
    InspirationalPanel,
    MobileAppSection,
    TopTrades,
    TestimonialsSection,
    Footer,
  },
};
</script>

<style>
html {
  font-size: 10px;
}

body {
  font-size: 18px !important;
  color: #666 !important;
  font-family: "Helvetica", "Arial", sans-serif !important;
}

@media only screen and (max-width: 600px) {
  html {
    font-size: 5px !important;
  }
  body {
    font-size: 14px;
  }
}

.content {
  padding-top: 65px;
}

.container {
  max-width: 1140px !important;
}
</style>
