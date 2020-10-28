<template>
  <div class="heading">
    <h1 class="display">Prettifier</h1>
  </div>
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
export default {
  name: "Landing",
  components: {
    Parser,
  },
};
</script>

<style scoped>
.heading {
  background-color: #27718a;
  width: 100%;
  box-shadow: 0px 3px 5px #1b1b1b60;
}
.display {
  font-size: 2rem;
  padding: 10px 20px;
  color: white;
  font-weight: 400;
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
</style>