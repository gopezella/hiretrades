<template>
  <section class="container" id="testimonialsSection">
    <div class="title">
      <h1>What homeowners are saying</h1>
    </div>

    <div class="row p-5">
      <Testimonial
        name="Jodie, NSW"
        testimonial="You make life really easy for last minute people like me. I'm always time challenged and not wanting to spend the time chasing Tradies. Two minutes to post a job. Right price, right quality, right timing. No stress whatsoever. Thanks HIREtrades."
        imageUrl="jodie.png"
      />
      <Testimonial
        name="Tony, WA"
        testimonial="This has to be the best way to go. Goodbye to searching the internet for hours or fumbling through business directories. HIREtrades do it all for me and it only take a couple of minutes to post the job. Great work guys "
        imageUrl="kenvacation.png"
      />
      <Testimonial
        name="Keith, NSW"
        testimonial="I can refurbish my entire kitchen sourcing the trades from HIREtrades. Plumbers, electricians, cabinet-makers, tilers, floor coverings and painters – it is so convenient. Saves me time and money. I get all the Quotes for free and the app is really easy to use. You can count on my repeat business."
        imageUrl="joseph-sydney.png"
      />
    </div>
  </section>
</template>

<script>
import Testimonial from "../../components/Testimonial/Testimonial";

export default {
  name: "TestimonialsSection",
  components: {
    Testimonial,
  },
};
</script>
<style scoped src="./TestimonialsSection.css"></style>
