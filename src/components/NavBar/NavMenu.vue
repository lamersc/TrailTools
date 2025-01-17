<script setup>
defineProps(["label"]);
</script>

<template>
  <div class="btn-group">
    <button
      type="button"
      class="btn btn-warning rounded-0 dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ label }}
    </button>
    <ul class="dropdown-menu">
      <slot></slot>
    </ul>
  </div>
  <!--Adds a vertical divider between button-->
  <div class="alert alert-dark m-0 p-0"></div>
</template>
