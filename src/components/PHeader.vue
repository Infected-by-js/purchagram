<template>
  <header class="header">
    <p-nav-mobile v-if="isMobile" />
    <p-nav-desktop v-else />
  </header>
</template>

<script>
import PNavDesktop from './p-nav/PNavDesktop.vue';
import PNavMobile from './p-nav/PNavMobile.vue';

export default {
  components: {PNavMobile, PNavDesktop},
  name: 'PHeader',
  data() {
    return {
      isMobile: true,
    };
  },
};
</script>
