<template>
  <section class="container" id="inspirational-panel">
    <div class="title">
      <h1>Inspirational Panel</h1>
    </div>

    <div class="row">
      <div class="col-12 col-sm-12 col-lg-8 col">
        <div class="row d-flex align-items-center no-gutters mb-5 card-item">
          <div class="col-5 img-col"></div>
          <div class="col-7">
            <div class="panel-content">
              <h2>Cost Guides</h2>
              <p>Research to assist consumers with Trades pricing.</p>
              <a href="#">View Prices</a>
            </div>
          </div>
        </div>

        <div class="row d-flex align-items-center no-gutters mb-5 card-item">
          <div class="col-7">
            <div class="panel-content">
              <h2>Blogs</h2>
              <p>Articles of interest and great ideas.</p>
              <a href="#">Discover more</a>
            </div>
          </div>
          <div class="col-5 img-col"></div>
        </div>

        <div class="row d-flex align-items-center no-gutters card-item">
          <div class="col-5 img-col"></div>
          <div class="col-7">
            <div class="panel-content">
              <h2>Ask a Tradie</h2>
              <p>Our network of Tradies can help answer your questions.</p>
              <a href="#">What's your question?</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-12  col-lg-4 col">
        <div class="card-item">
          <img
            class="img-fluid"
            src="https://hiretrades2.s3.amazonaws.com/htweb-assets/homepage/blueprint-designing-diagram.webp"
            alt="blueprint-designing-diagram.webp"
          />
          <div class="panel-content panel-content2">
            <h2>Ask a Tradie</h2>
            <p>Our network of Tradies can help answer your questions.</p>
            <a href="#">What's your question?</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InspirationalPanel",
};
</script>

<style scoped src="./InspirationalPanel.css"></style>
