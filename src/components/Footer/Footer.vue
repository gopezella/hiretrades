<template>
  <footer>
    <div class="container">
      <div class="row footer-content">
        <div class="d-none d-sm-none d-lg-block col-md-3 col-lg-3">
          <a class="footer-brand" href="#">
            <img src="../../assets/logo.png" alt="logo" />
            <img src="../../assets/brand-name.png" alt="brand-name-logo" />
          </a>
          <hr />
          <h4>Australia's most trusted trades provider</h4>
        </div>

        <div class="col-12 col-sm-3 col-md-3 col-lg-2 col">
          <h5>Customers</h5>
          <hr />
          <ul>
            <a href=""> <li>Get Quotes</li></a>
            <a href=""> <li>200+ Trades</li></a>
            <a href=""> <li>How It Works</li></a>
            <a href=""> <li>Trades Directory</li></a>
            <a href=""> <li>FAQs</li></a>
          </ul>
        </div>

        <div class="col-12 col-sm-3 col-md-3 col-lg-2 col">
          <h5>Tradies</h5>
          <hr />
          <ul>
            <a href=""> <li>Register</li></a>
            <a href=""> <li>Login</li></a>
            <a href=""> <li>How It Works</li></a>
            <a href=""> <li>FAQs</li></a>
          </ul>
        </div>

        <div class="col-12 col-sm-3 col-md-3 col-lg-2 col">
          <h5>HIREtrades</h5>
          <hr />
          <ul>
            <a href=""><li>Contact Us</li></a>
            <a href=""> <li>Our Story</li></a>
            <a href=""> <li>How It Works</li></a>
            <a href=""> <li>Terms &amp; Conditions</li></a>
            <a href=""> <li>Blogs</li></a>
            <a href=""> <li>CostGuides</li></a>
          </ul>
        </div>

        <div class="col-12 col-sm-3 col-md-3 col-lg-3 col store-apps">
          <h5>Download our apps</h5>
          <hr />
          <div class="row">
            <div class="col-lg-6 ">
              <a
                href="https://apps.apple.com/au/app/id1311963554"
                target="_blank"
                rel="noreferrer"
                ><img
                  title="Apple Store"
                  src="https://s3.amazonaws.com/hiretradesweb/designstaging/mobile/ios-black.png"
                  alt="Apple Store"
              /></a>
            </div>
            <div class="col-lg-6">
              <a
                rel="noreferrer"
                title="Google Play Store"
                href="https://play.google.com/store/apps/details?id=io.htmobile.app&amp;hl=en"
                target="_blank"
                ><img
                  height="100"
                  src="https://s3.amazonaws.com/hiretradesweb/designstaging/mobile/android-black.png"
                  alt="Google Play Store Download App"
                  class="img-fluid"
              /></a>
            </div>
          </div>
          <div class="mt-5 social-app">
            <h5>Follow us</h5>
            <hr />

            <ul>
              <li>
                <a href="https://www.facebook.com/HireTradesAustralia/"
                  ><i class="fab fa-facebook-f"></i
                ></a>
              </li>
              <li>
                <a href="https://twitter.com/HIREtradesAU"
                  ><i class="fab fa-twitter"></i
                ></a>
              </li>
              <li>
                <a href="https://www.instagram.com/hiretrades/"
                  ><i class="fab fa-instagram"></i
                ></a>
              </li>
              <li>
                <a href="https://www.pinterest.com.au/hiretradesaustralia/"
                  ><i class="fab fa-pinterest"></i
                ></a>
              </li>
              <li class="list-inline-item mr-0 mb-sm-2">
                <a href="https://www.linkedin.com/company/hiretrades/"
                  ><i class="fab fa-linkedin"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div class="row justify-content-between">
        <div class="col-12 col-md-auto text-center">
          <div class="d-none d-lg-block">
            <small>© 2020 - www.HIREtrades.com.au | All Rights Reserved</small>
          </div>
          <div class="d-block d-lg-none">
            <small class="mb-1">© 2020 - www.HIREtrades.com.au</small>
            <small>All Rights Reserved</small>
          </div>
        </div>

        <div class="col-12 col-md-auto text-center bottom-links">
          <div class="d-none d-lg-block">
            <a href="/privacy-policy"><small>Privacy Policy</small></a>
            <span>|</span>
            <a href="/sitemap"><small>Sitemap</small></a>
            <span>| <small>v_2.0.78</small></span>
          </div>
          <div class="d-block d-md-none d-lg-none pp-mob">
            <a href="/privacy-policy" class="mb-1"><p>Privacy Policy</p></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped src="./Footer.css"></style>
