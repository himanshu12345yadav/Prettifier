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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
:root {
  --primary-color: #047aed;
}
</style>
