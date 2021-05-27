<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../../assets/logo.png" alt="logo" />
        <img src="../../assets/brand-name.png" alt="brand-name-logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link" aria-current="page" href="#">Trades</a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <div class="row d-flex align-items-center py-3">
                <div class="col-sm-3">
                  <h5 class="color-primary">Popular Trades</h5>
                </div>
                <div class="col-sm-3">
                  <ul>
                    <li><a>Handyman</a></li>
                    <li><a>Plumbers</a></li>
                    <li><a class="mb-0">Carpenters</a></li>
                  </ul>
                </div>
                <div class="col-sm-3">
                  <ul>
                    <li><a>Builder</a></li>
                    <li><a>Painters</a></li>
                    <li><a class="mb-0">Kitchen</a></li>
                  </ul>
                </div>
                <div class="col-sm-3">
                  <ul>
                    <li><a>Electricians</a></li>
                    <li><a>Cleaning</a></li>
                    <li><a class="mb-0">Air-Con</a></li>
                  </ul>
                </div>
              </div>

              <hr />

              <div class="row py-3">
                <div class="col-sm-3">
                  <li><a>Antenna Services</a></li>
                  <li><a>Arborist</a></li>
                  <li><a>Arches</a></li>
                  <li><a>Asbestos Removal</a></li>
                  <li><a>Awnings</a></li>
                  <li><a>Balustrading</a></li>
                  <li><a>Bathroom Renovation</a></li>
                  <li><a>Blinds</a></li>
                  <li><a>Bricklaying</a></li>
                  <li><a>Cabinet Making</a></li>
                  <li><a>Carpet and Upholstery Cleaning</a></li>
                  <li><a>Carports</a></li>
                  <li><a>Cement Bonding Agents</a></li>
                  <li><a>Cladding</a></li>
                  <li><a>Cleaning</a></li>
                </div>
                <div class="col-sm-3">
                  <ul>
                    <li><a>Decking</a></li>
                    <li><a>Demolition</a></li>
                    <li><a>Doors</a></li>
                    <li><a>Drafting</a></li>
                    <li><a>Excavation</a></li>
                    <li><a>Fencing</a></li>
                    <li><a>Floor Standing &amp; Polishing</a></li>
                    <li><a>Garages</a></li>
                    <li><a>Garden Maintenance</a></li>
                    <li><a>Gas Filters</a></li>
                    <li><a>Gates</a></li>
                    <li><a>Gazebo</a></li>
                    <li><a>Glass &amp; Glazing</a></li>
                    <li><a>Home Theatre</a></li>
                    <li><a>How Water Systems</a></li>
                    <li><a>Inspections - Building</a></li>
                  </ul>
                </div>
                <div class="col-sm-3">
                  <ul>
                    <li><a>Interior Decorating</a></li>
                    <li><a>Interios Designer</a></li>
                    <li><a>Irrigation Systems</a></li>
                    <li><a>Landscaping &amp; Gardening</a></li>
                    <li><a>Law &amp; Turf</a></li>
                    <li><a>Lawn Mowing</a></li>
                    <li><a>Patios</a></li>
                    <li><a>Paving</a></li>
                    <li><a>Pergolas</a></li>
                    <li><a>Pest Control</a></li>
                    <li><a>Plastering Gyprock</a></li>
                    <li><a>Pool Fencing</a></li>
                    <li><a>Pressure Cleaning</a></li>
                    <li><a>Rainwater Tanks</a></li>
                    <li><a>Rendering</a></li>
                    <li><a>Retaining Walls</a></li>
                  </ul>
                </div>
                <div class="col-sm-3">
                  <ul>
                    <li><a>Rubbish Removal</a></li>
                    <li><a>Security</a></li>
                    <li><a>Skylights</a></li>
                    <li><a>Splashbacks</a></li>
                    <li><a>Surveyors</a></li>
                    <li><a>Tilers</a></li>
                    <li><a>Timber Flooring</a></li>
                    <li><a>Tree Felling</a></li>
                    <li><a>Tv Units</a></li>
                    <li><a>Undefloor Heating</a></li>
                    <li><a>Underpinning</a></li>
                    <li><a>Upholstery Repair</a></li>
                    <li><a>Verandahs</a></li>
                    <li><a>Waterproofing</a></li>
                    <li><a>Window Cleaning</a></li>
                    <li><a>Window Repairs</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="https://www.hiretrades.com.au/cost-guides"
              >Cost Guides</a
            >
          </li>

          <li class="nav-item">
            <a class="nav-link" href="https://www.hiretrades.com.au/blog"
              >Blogs</a
            >
          </li>
        </ul>

        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link"
              aria-current="page"
              href="https://getquotes.hiretrades.com.au/"
              >Get Quotes</a
            >
          </li>
          <li class="nav-item register-business">
            <a class="nav-link" href="https://register.hiretrades.com.au/"
              >Register Business</a
            >
          </li>

          <li class="nav-item rb-mob">
            <a class="nav-link" href="https://register.hiretrades.com.au/"
              >Register Business</a
            >
          </li>

          <li class="nav-item">
            <a class="nav-link" href="https://www.hiretrades.com.au/account/"
              >Login</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped src="./Navbar.css"></style>
