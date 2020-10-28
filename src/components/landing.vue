<template>
  <div class="heading">
    <h1 class="display">Prettifier</h1>
  </div>
  <div class="showcase">
    <div class="container">
      <div class="product-intro">
        <div class="product-intro-heading">Modern Prettifier</div>
        <div class="product-intro-content">
          Prettifier is multipurpose beautifying tool which is efficient, fast ,
          reliable . Prettifier can parse large URL's , json payload, upfronts
          and many more.
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
</template>

<script>
import Parser from "../components/parser.vue";
import Features from "../components/features";
export default {
  name: "Landing",
  components: {
    Parser,
    Features,
  },
};
</script>

<style scoped>
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
  font-family: "Lato", sans-serif;
}
.parser-wrapper {
  display: grid;
  place-items: center;
  width: 100%;
  height: 70vh;
  margin-top: 10vh;
}
.main-parser {
  width: 80%;
  height: 100%;
  background-color: #161616;
  border-radius: 5px;
  color: white;
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
  font-weight: 300;
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
/* 
https://r2---sn-ci5gup-pmjk.googlevideo.com/videoplayback?expire=1603730241&ei=4KaWX9LWOsjKvATGy45I&ip=2401%3A4900%3A447e%3Ab7cd%3A448d%3A541%3A3829%3A38c&id=o-AMcieHBBBsk4rL4bniUZOuLWndbxnJgkF4Co9P1tu9lU&itag=251&source=youtube&requiressl=yes&mh=P6&mm=31%2C29&mn=sn-ci5gup-pmjk%2Csn-ci5gup-qxaee&ms=au%2Crdu&mv=m&mvi=2&pl=46&initcwndbps=220000&vprv=1&mime=audio%2Fwebm&gir=yes&clen=3319290&dur=205.021&lmt=1603013416804288&mt=1603708481&fvip=5&keepalive=yes&c=WEB_REMIX&txp=5532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAIOPIOm9Xa1GaOb-_5jUIi4cFvasrVcOSk9ddjhSRDuOAiEA4gzHeCvqAeSx6Q-WTbjC4DoLsVl2vPyKSiIYE6ORbhc%3D&alr=yes&sig=AOq0QJ8wRgIhANmIyVovQ31JpU1X9umvzDH4bAm8SCff56g9kDpJwUoTAiEA9vsGj6xTPEKJA6QZUDZcSWXff3Qqti9VkrXztPveknY%3D&cpn=rDKjF2EAwTU4Iaz_&cver=0.1&range=517925-855458&rn=11&rbuf=21652
 */
</style>
