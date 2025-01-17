<script setup>
import NavMenu from "./NavMenu.vue";
import NavItem from "./NavItem.vue";
</script>

<template>
  <div class="fixed-top hstack bg-dark">
    <div class="btn-group" role="group">
      <NavMenu label="File">
        <NavItem>New Map</NavItem>
        <hr class="dropdown-divider" />
        <NavItem>Open Map</NavItem>
        <NavItem>Save Map to Disk</NavItem>
        <hr class="dropdown-divider" />
        <NavItem>Settings</NavItem>
      </NavMenu>

      <NavMenu label="Assets">
        <NavItem>Import Assets</NavItem>
        <hr class="dropdown-divider" />
        <NavItem>Import Placeholders</NavItem>
      </NavMenu>

      <NavMenu label="Edit"> </NavMenu>

      <NavMenu label="View">
        <NavItem>Enable Fly Camera</NavItem>
      </NavMenu>
    </div>
    <span class="trailmakers-orange ms-auto pe-3 fs-5"> Trail Tools </span>
  </div>
</template>

<style scoped></style>
