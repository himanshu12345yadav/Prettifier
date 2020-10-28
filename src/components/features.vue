<template>
  <div class="features-wrapper">
    <div class="features">
      <div class="feature">
        <div class="feature-icon"><i class="fa fa-fire fa-2x"></i></div>
        <div class="feature-info">
          <div class="feature-title">Free</div>
          <div class="feature-description">
            Prettifier is completely free and open source for personal and enterprise usage
          </div>
        </div>
      </div>
      <div class="feature">
        <div class="feature-icon"><i class="fa fa-rocket fa-2x"></i></div>
        <div class="feature-info">
          <div class="feature-title">Fast</div>
          <div class="feature-description">
            Prettifier uses Javascript Regex Engine and VUE JS framework which
            makes it blazingly fast
          </div>
        </div>
      </div>
      <div class="feature">
        <div class="feature-icon">
          <i class="fa fa-wrench fa-2x"></i>
        </div>
        <div class="feature-info">
          <div class="feature-title">Browser Support</div>
          <div class="feature-description">
            Prettifier is supported by all the major browser and works perfectly
            in all of them.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.features-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.features {
  padding-top: 2%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}
.feature {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Lato", sans-serif;
}
.feature-info {
  font-size: 1rem;
  color: #292929;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.feature-icon {
  color: #242424;
  font-size: 1.5rem;
}
.feature-title {
  font-size: 1.4rem;
  padding: 10px;
}
.feature-description {
  font-size: 1rem;
  padding: 10px;
  text-align: center;
  line-height: 1.6em;
  color: #3f3f3f;
}
</style>

<script>
export default {
  name: "features",
  components: {},
};
</script>