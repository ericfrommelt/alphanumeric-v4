<template>
  <div class="layout-wrapper">
    <div class="content-wrapper">
      <Header class="header" />
    </div>
    <Projects />
    <Thanks />
  </div>
</template>

<style scoped>
  .content-wrapper {
    display: grid;
    grid-template-columns: auto minmax(auto, 1440px) auto;
    background-color: #0C26B0;
  }

  .header {
    grid-column: 2;
  }
</style>