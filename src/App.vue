<template>
  <Landing />
</template>

<script>
import Landing from "./components/landing";

export default {
  name: "App",
  components: {
    Landing,
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Recursive', sans-serif;
}
:root {
  --primary-color: #020a37;
}
</style>
