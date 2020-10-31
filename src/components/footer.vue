<template>
  <div class="footer-wrapper">
    <div class="footer">
      <div class="copyright">
        <div class="brand_name">Prettifier</div>
        <div class="copy">Copyright &copy; 2020</div>
      </div>
      <div class="made-by">Made with &#10084; by Himanshu Yadav</div>
    </div>
  </div>
</template>


<style scoped>
.footer-wrapper {
  width: 100%;
  max-width: 100%;
  height: 100px;
  background-color: #020a37;
  padding: 100px 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Lato", sans-serif;
  font-weight: 400;
}
.footer {
  max-width: 1000px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
}
.footer .brand_name {
  font-size: 2rem;
  line-height: 1.6;
  padding: 10px 0px;
}
.made-by {
  margin: auto 0px;
  padding: 20px;
  margin-left: auto;
}
@media (max-width: 576px) {
  .made-by {
    margin: 20px 0px;
    padding: 0;
  }
}
</style>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>