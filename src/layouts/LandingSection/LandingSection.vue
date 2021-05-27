<template>
  <section class="container" id="landing-section">
    <div
      class="row justify-content-center d-flex align-items-center text-center"
    >
      <div class="col-9 col-md-10 col-lg-5">
        <h1>Australia's most trusted trades provider</h1>
        <form class="landing-form">
          <div class="mb-3 text-left">
            <label for="trade" class="form-label"
              >What trade do you need?</label
            >
            <input
              class="form-control"
              id="trade"
              placeholder="e.g Plumber, Electricians"
            />
          </div>
          <div class="input-icon">
            <i class="fas fa-tag"></i>
          </div>

          <div class="mb-3 text-left">
            <label for="postcode" class="form-label">Postcode or Suburb:</label>
            <input
              class="form-control"
              id="postcode"
              placeholder="e.g Sydney"
            />
          </div>

          <div class="input-icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>

          <div class="row justify-content-center">
            <div class="col-sm-8">
              <button class="landing-btn" type="button">Post a Job</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LandingSection",
};
</script>

<style scoped src="./LandingSection.css"></style>
