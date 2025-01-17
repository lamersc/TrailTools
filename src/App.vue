<script setup>
import NavBar from "@/components/NavBar";
import RenderView from "@/components/RenderView.vue";
import HotBar from "@/components/HotBar.vue";
import About from "@/components/About";
</script>

<template>
  <NavBar />
  <RenderView />
  <HotBar />
  <About />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jura:wght@600&display=swap");
* {
  font-family: "Jura", serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
body {
  background-color: rgb(91, 176, 243);
}
.trailmakers-orange {
  color: rgb(240, 152, 55);
}
#app {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
