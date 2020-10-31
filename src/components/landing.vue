<template>
  <div class="heading">
    <h1 class="display">Prettifier</h1>
  </div>
  <div class="showcase">
    <div class="container">
      <div class="product-intro">
        <div class="product-intro-heading">Beautify Large Url's</div>
        <div class="product-intro-content">
          Prettifier is multipurpose beautifying tool which is efficient, fast ,
          reliable . Prettifier can parse and beautify large URL's , json
          payload, and many more.
        </div>
      </div>
      <div class="product-image">
        <img src="../assets/product-demo.png" alt="placeholder" />
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#ffffff"
        fill-opacity="1"
        d="M0,224L80,240C160,256,320,288,480,277.3C640,267,800,213,960,181.3C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  </div>
  <Features />
  <div class="parser-wrapper">
    <div class="main-parser">
      <div class="parser-header">
        <div class="parser-buttons">
          <div class="navigation-button close"></div>
          <div class="navigation-button minimise"></div>
          <div class="navigation-button maximise"></div>
        </div>
      </div>
      <Parser />
    </div>
  </div>
  <Footer />
</template>

<script>
import Parser from "../components/parser.vue";
import Features from "../components/features";
import Footer from "../components/footer.vue";
export default {
  name: "Landing",
  components: {
    Parser,
    Features,
    Footer,
  },
};
</script>

<style>
.heading {
  background-color: var(--primary-color);
  width: 100%;
  box-shadow: 0px 3px 10px #1b1b1b60;
}
.display {
  font-size: 2rem;
  padding: 10px 50px;
  color: white;
  font-weight: 300;
}
.parser-wrapper {
  display: flex;
  justify-content: center;
  max-width: 1400px;
  height: 70vh;
  max-height: 70vh;
  margin: 10vh 0px;
}
.main-parser {
  width: 80%;
  max-width: 100%;
  background-color: #161616;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #00000086;
}
.parser-header {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #363636;
}
.parser-buttons {
  width: 20%;
  height: auto;
  padding: 10px;
  display: flex;
}
.navigation-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0px 5px;
}
.parser-header .close {
  background-color: #fc6058;
}
.parser-header .minimise {
  background-color: #fec02f;
}
.parser-header .maximise {
  background-color: #2aca3e;
}
.showcase {
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  position: relative;
  z-index: 1111;
}
.showcase svg {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
}
.container {
  padding-top: 2%;
  display: grid;
  font-family: "Lato", sans-serif;
  color: white;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}
.product-intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding: 20px 30px;
  grid-template-columns: 1fr;
}
.product-intro-heading {
  font-size: 2rem;
}
.product-intro-content {
  color: white;
  padding: 5% 0px;
  line-height: 1.8rem;
}
.product-image {
  grid-template-columns: 2fr;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 0px 20px;
  grid-template-columns: 2fr;
}
.product-image img {
  max-width: 100%;
  border-radius: 5px;
  box-shadow: 3px 3px 10px #1111118f;
}
@media (max-width: 768px) {
  .main-parser {
    width: 90%;
  }
}
@media (max-width: 576px) {
  .main-parser {
    width: 95%;
  }
}
</style>
